const width = 700 //rectangle width
const height = 400 //rectangle height
class Simulator {

	constructor(context, x, y, N, M, SDE) {
		this.context = context
		this.x = x //x position of rectangle
		this.y = y //y position of rectangle
		this.N = N //number of intervals over 1
		this.M = M //number tries
		this.SDE = SDE //Stocastical differential equation
		//this.success = success //increment for success
		//this.failure = failure //increment for failure
		this.box = new Rectangle(context, x, y, width, height)
		this.histogramMiddle = new Histogram(context, 2*N ,50, this.x + 350, this.y, 100, height)
		this.histogramLast = new Histogram(context, 2*N, 50, this.x + width, this.y, 100, height)
		this.calcIntervals()
	}

	calcIntervals() {
		var scaledX = 0
		var scaledY = 0
		for (var i = 1/this.N; i < 1; i = i + 1/this.N){
			scaledX = i * width
			//this.box.drawLine(scaledX, 0, scaledX, height, "Lightgrey")
		}
		for (var i = 1/this.N; i < 1; i = i + 1/this.N){
			scaledY = i * height
			//this.box.drawLine(0, scaledY, width, scaledY, "Lightgrey")
		}
	}

	simulate(){
		var color = ""
		var step = 0
		var rand = 0
		var x2 = 0
		var y2 = height/2
		var outcome = 0
		for (var trial = 0; trial < this.M; trial++){
			var x1 = 0
			var y1 = height/2
			var total = 0;
			color = "#"+((1<<24)*Math.random()|0).toString(16);
			for (var time = 0; time < this.N; time++) {
				outcome = this.SDE(time/this.N, this.N)
  				
				total += outcome


				x2 = x1 + 1/this.N * width
				step = -outcome
				y2 =  y1 + step
				this.box.drawLine(x1, y1, x2, y2, color)
				x1 = x2
				y1 = y2
			}
			this.histogramLast.addToBin(total)
		}
	}
}