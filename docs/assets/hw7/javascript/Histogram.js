class Histogram{
  constructor (context, unit, k, x, y, width, height) {
    this.context = context
    this.unit = unit
    this.k = k
    this.x = x 
    this.y = y
    this.height = height
    this.width = width
    this.box = new Rectangle(context, x, y, width, height)
    this.histo = []
    this.calcIntervals()
  }

  calcIntervals() {
    var bin = -this.unit/2
    for (var i = 0; i <= this.k; i ++) {
      this.box.ctx.fillText(bin, this.x + this.width, this.y + this.height - i/this.k * this.height);
      this.histo[i] = [bin, 0]
      bin = bin + this.unit/this.k
    }


    var scaledY = 0
    for (var i = 0; i < 1; i = i + 1/this.k) {
      scaledY = i * this.height
      this.box.drawLine(0, scaledY, this.width, scaledY, "Lightgrey")
    }
  }

  addToBin(v) {
    for (var i = 0; i < this.k; i++) {
      if (v > this.histo[i][0] && v <= this.histo[i+1][0]){
        this.histo[i][1] ++;
        this.box.drawRect(0, this.height - (i+1)*(1/this.k * this.height), this.histo[i][1]*2.5, 1/this.k* this.height, "Red")
      }
    }
  }

}