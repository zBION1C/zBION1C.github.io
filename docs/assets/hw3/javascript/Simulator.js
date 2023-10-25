class Simulator {
	constructor(ctx,systems, attacks, success, failure, p, freq, x, y, mid_day){
		this.p = p; 
		this.freq = freq;
		this.systems = systems;
		this.attacks = attacks;
		this.success = success;
		this.failure = failure;
		this.mid_day = mid_day;
		this.ctx = ctx;
		this.box = new Rectangle(x,y,800,600,this.ctx);
		this.box.drawLine(0, this.box.h/2, this.box.w, this.box.h/2, "DarkGray")
		this.scale = 5*(1-this.p);
		if (this.freq==="rel") {
			this.scale = 20*(1-this.p);
		}
		if (this.freq==="reln") { 
			this.scale = 5*(1-this.p);
		}
		this.histo1 = new Histogram(this.ctx, 50, this.box.x+mid_day+this.box.w/7, this.box.y, this.box.w/7, this.box.h);
		this.histo2 = new Histogram(this.ctx, 50, this.box.x+this.box.w-this.box.w/7, this.box.y, this.box.w/7, this.box.h);
	}


	timer(ms) {
		return new Promise(res => setTimeout(res, ms));
	}

	async simulate() {
		let r = 0;

		for (let i = 1; i <= this.systems; i++){
			var x1 = 0;
			var y1 = this.box.h/2;
			var x2 = 0;
			var y2 = this.box.h/2;
			var n_success = 0;
			var divisor = 1;
			var esito = 0;
			var color = "#"+((1<<24)*Math.random()|0).toString(16);
			for (let j = 1; j <= this.attacks; j++) {
				if (j % (this.attacks/10) == 0){
					await this.timer(10);
				}
				r = Math.random();
				if (r <= this.p) {
					n_success++;
					if (this.freq==="rel") {
						divisor = n_success;
					}
					if (this.freq === "reln") {
						divisor = Math.sqrt(n_success);
					}
					esito += (this.success*this.scale)/divisor;


				} else {
					esito += (this.failure*this.scale)/divisor;
				}
				
				if (j == this.mid_day){
					this.histo1.addToBin(esito)
				}

				x2 = j*(this.box.w/this.attacks);
				y2 = this.box.h/2-esito;
				this.box.drawLine(x1, y1, x2, y2, color)
				x1 = x2;
				y1 = y2
			}
			this.histo2.addToBin(esito);
		}
	}
}