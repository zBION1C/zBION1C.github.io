class Histogram {
	constructor(ctx, k, x, y, width, height) {
		this.ctx = ctx;
		this.k = k;
		this.w = width;
		this.h = height;
		this.box = new Rectangle(x,y,this.w,this.h,this.ctx);
		this.distance = this.h/this.k;
		this.display();
		this.histo = []
		
		var bin_value = -this.k/2;
		for (let i = 0; i < this.k; i++) {
			bin_value++
			this.histo[i] = [(-bin_value*(this.distance)), 0]
		}
	}

	display() {
		for (let i = 0; i <= this.h; i+=this.distance) {
			this.box.drawLine(0, i, this.w, (i), "black");
		}
	}


	addToBin(v) {
		for (let i = 0; i < this.k-1; i++) {
			if (v > this.histo[i+1][0] && v <= this.histo[i][0]) {
				this.histo[i][1] += 1;
				this.box.drawRect(this.w, i*this.distance, this.histo[i][1]*1.5, this.distance, "FireBrick");
			}
		}
	}
}