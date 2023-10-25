class Rectangle {
	constructor(x,y,width,height,context){
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
		this.ctx = context;
		this.display();
	}

	display() {
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.w, this.h);
		this.ctx.stroke();
	}


	drawLine(x1, y1, x2, y2, color) {
		this.ctx.beginPath();
		this.ctx.moveTo(this.x+x1, this.y+y1);
		this.ctx.lineTo(this.x+x2, this.y+y2);

		this.ctx.strokeStyle = color;
		this.ctx.stroke();
		this.ctx.strokeStyle = "black";
	}

	drawRect(x, y, w, h, color) {
		this.ctx.beginPath();
		this.ctx.fillStyle  = color;
		this.ctx.fillRect(this.x+x, this.y+y, w, h);
	}

}