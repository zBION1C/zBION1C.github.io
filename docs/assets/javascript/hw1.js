<script>
    var c = document.getElementById("myCanvas");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    
    function drawPoint() {
        if (canvas.getContext) {
            var X = canvas.width / 3;
            var Y = canvas.height / 2;
            var R = 2;
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.fillStyle = "black";  // color inside the circle
            ctx.strokeStyle = 'black';  // color of outline
            ctx.fill(); // fill inside the circle
            ctx.stroke() // outline
        }
    }

    function drawLine() {
        if (canvas.getContext) {
            var X = canvas.width / 2.5;
            var Y = canvas.height / 2;
            ctx.beginPath();
            ctx.moveTo(X, Y);
            ctx.lineTo(X+20, Y);
            ctx.strokeStyle = 'black';  // color of outline
            ctx.lineWidth = 3;
            ctx.stroke(); // outline
        }
    }

    function drawCircle() {
        if (canvas.getContext) {
            var X = canvas.width / 1.7;
            var Y = canvas.height / 2;
            var R = 25
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 2;
            ctx.fillStyle = "orange";
            ctx.strokeStyle = "orange";
            ctx.fill();
            ctx.stroke();
        }
    }

    function drawRect() {
        if (canvas.getContext) {
            var X = canvas.width / 1.4;
            var Y = canvas.height / 3;
            ctx.beginPath();
            ctx.rect(X, Y, 70,50);
            ctx.stroke();
        }
    }

    drawPoint();
    drawLine();
    drawCircle();
    drawRect();
</script>