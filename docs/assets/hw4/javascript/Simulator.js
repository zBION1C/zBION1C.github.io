class Simulator {
	constructor(ctx,systems, T, N, success, failure, p, freq, x, y, mid_day){
		this.p = p; 
		this.freq = freq;
		this.systems = systems;
		this.T = T;
		this.N = N;
		this.distance = T/N;
		this.success = success;
		this.failure = failure;
		this.mid_day = mid_day;
		this.ctx = ctx;
		this.width = 1000;
		this.height = 800;
		this.box = new Rectangle(x,y,this.width,this.height,this.ctx);
		this.histo1 = new Histogram(this.ctx, 1, N, this.box.x+mid_day+this.box.w/3, this.box.y, this.box.w/7, this.box.h);
		this.histo2 = new Histogram(this.ctx, 1, N, this.box.x+this.box.w-this.box.w/7, this.box.y, this.box.w/7, this.box.h);
	}

	calculateIntervals() {
		for (let i = 0; i <= this.T; i += (this.T/this.N)) {
			this.box.drawLine(i * this.width, 0, i * this.width, this.box.h, "lightgrey");
			this.box.drawLine(0, i * this.height, this.width, i * this.height, "lightgrey")
		}

	}

	timer(ms) {
		return new Promise(res => setTimeout(res, ms));
	}

	async simulate() {
		let r = 0;

		for (let i = 1; i <= this.systems; i++){
			var x1 = 0;
			var y1 = this.box.h;
			var x2 = 0;
			var y2 = this.box.h;
			var n_success = 0;
			var divisor = 1;
			var esito = 0;
			var color = "#"+((1<<24)*Math.random()|0).toString(16);
			for (let j = this.distance*this.width; j <= this.width; j += this.distance*this.width) {
				await this.timer(0.5);
				r = Math.random();
				if (r <= this.p) {
					esito += this.success;
				} else {
					esito += this.failure;
				}
				
				if (j == this.mid_day){
					this.histo1.addToBin(esito)
				}

				x2 = j;
				y2 = this.box.h-(esito*this.distance*this.height);
				this.box.drawLine(x1, y1, x2, y2, color)
				x1 = x2;
				y1 = y2
			}
			this.histo2.addToBin(esito);
		}
	}
}