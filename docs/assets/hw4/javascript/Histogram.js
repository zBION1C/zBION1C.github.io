class Histogram {
	constructor(ctx, N, k, x, y, width, height) {
		this.ctx = ctx;
		this.N = N;
		this.k = k+1;
		this.w = width;
		this.h = height;
		this.box = new Rectangle(x,y,this.w,this.h,this.ctx);
		this.distance = this.N/this.k;
		this.display();
		this.histo = []
		
		for (let i = 0; i <= this.k; i++) {
			this.histo[i] = [i*this.distance*this.k, 0]
		}
	}

	display() {
		for (let i = 0; i <= this.h; i+=this.distance*this.h) {
			this.box.drawLine(this.w-5, i, this.w+5, (i), "black");
			this.box.ctx.fillText(i/this.h*this.k, this.w*7.1, this.h-(i));
		}
	}


	addToBin(v) {
		console.log(this.h*this.distance)
		if (v == this.histo[this.k][0]){
			this.histo[this.k][1] += 1;
			this.box.drawRect(this.w, 0*(this.h*this.distance), -this.histo[this.k][1]*1.2, this.distance*this.h, "FireBrick");

		}
		else if (v == this.histo[0][0]){
			console.log(v)
			this.histo[0][1] += 1;
			this.box.drawRect(this.w, (this.k/this.N-1)*(this.h*this.distance), -this.histo[0][1]*1.3, this.distance*this.h, "FireBrick");
		}

		for (let i = 0; i < this.k; i++) {
			if (v < this.histo[i+1][0] && v >= this.histo[i][0]) {
				this.histo[i][1] += 1;
				this.box.drawRect(this.w, ((this.k-i-1)/this.N)*(this.h*this.distance), -this.histo[i][1]*1.3, this.distance*this.h, "FireBrick");
			}
		}
	}
}