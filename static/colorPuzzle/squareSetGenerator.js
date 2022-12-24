function squareSetGenerator(sSize, wWidth, wHeight, bHandler) {
	var squareSize = sSize;
	var squares = [];
	var windowWidth = wWidth;
	var windowHeight = wHeight;
	var backgroundCellSize = bHandler.getSquareSize();

	function rearrangeSquaresRight() {
		var startX = 8 * (backgroundCellSize + 2);
		var offsetStartX = windowWidth - startX - backgroundCellSize;

		for (var i = 0; i < squares.length; i++) {
			squares[i].x = Math.floor(Math.random() * offsetStartX) + startX;
			squares[i].y = Math.floor(Math.random() * (windowHeight - backgroundCellSize)) ;
		}
	};

	function rearrangeSquaresBellow() {
		var startY = 8 * (backgroundCellSize + 2);
		var offsetStartY = windowHeight - startY - backgroundCellSize;

		for (var i = 0; i < squares.length; i++) {
			squares[i].x = Math.floor(Math.random() * (windowWidth - backgroundCellSize)) ;
			squares[i].y = Math.floor(Math.random() * offsetStartY) + startY;
		}

	};

	this.generate = function() {

		var backModel = bHandler.getModel();

		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {

				var text = backModel[i][j].text;

				var color = backModel[i][j].color;

				squares.push(
					new square(i * (squareSize + 2),
						j * (squareSize + 2),
						squareSize,
						color,
						text,
						i,
						j,
						true
					)
				);
			}
		}

		if (windowWidth >= windowHeight) {
			rearrangeSquaresRight();
		} else {
			rearrangeSquaresBellow();
		}

		return squares;
	};
}
