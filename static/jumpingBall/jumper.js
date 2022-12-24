function jumper(context, inWidth, inHeight, inReportFunction) {
	var ctx = context;
	var width = inWidth;
	var height = inHeight;
	var run = false;
	var y = undefined;
	var g = 0.98;
	var velocity = 1;
	var ballSize = 20;
	var ballRadius = 10;
	var x = (inWidth / 2) - 10;
	var reportFunction = inReportFunction;
	var inertionFactor = 0.9;

	this.init = function() {
		ctx.beginPath();
		ctx.arc(x, 0 + ballRadius, ballRadius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'yellow';
		ctx.fill();
	};

	this.start = function() {
		draw();
	};

	this.stop = function() {
		y = 0 + ballRadius;
		inertionFactor = 0.9;
		velocity = 1;
	};


	function ballDraw() {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();
		ctx.arc(x, y, ballRadius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'yellow';
		ctx.fill();
		ctx.closePath();
	}

	function draw() {
		ballDraw();

		reportFunction(g, velocity, y, inertionFactor);

		y += velocity;
		velocity += g;

		if (y + ballRadius > height) {
			y = height - ballRadius;
			velocity *= -inertionFactor;
			inertionFactor -= 0.01;
			if (inertionFactor < 0) {
				return;
			}
		}

		requestAnimationFrame(draw);

	}

}
