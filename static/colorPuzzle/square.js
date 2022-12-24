function square(iX, iY, sideSize, inColor, inText, inFirst, inSecond) {
	this.x = iX;
	this.y = iY;
	this.side = sideSize;
	this.color = inColor;
	this.text = inText;
	this.firstNumber = inFirst;
	this.secondNumber = inSecond;

	this.isInside = function(X, Y, left, top) {
		if (this.x <= (X - left) && ((this.x + this.side + left) >= X) && this.y <= (Y - top) && ((this.y + this.side + top) >= Y)) {
			return true;
		}

		return false;
	}

}
