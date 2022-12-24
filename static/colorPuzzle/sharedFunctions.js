function drawTextWithOutline(fontText, ctx, text, posX, posY, cSize) {
	ctx.font = fontText;
	var textSize = ctx.measureText(text);
	var textYpos = posY + (cSize / 2) + 5; // (textSize.height / 2);
	var textXpos = posX + (cSize / 2) - (textSize.width / 2);

	ctx.strokeStyle = "black";
	ctx.lineWidth = 3; // text border width
	ctx.strokeText(text, textXpos, textYpos);
	ctx.fillStyle = "white";
	ctx.fillText(text, textXpos, textYpos);
}

function drawBlueText(fontText, ctx, text, posX, posY, cSize) {
	ctx.font = fontText;
	var textSize = ctx.measureText(text);
	var textYpos = posY + (cSize / 2) + 5;
	var textXpos = posX + (cSize / 2) - (textSize.width / 2);
	ctx.fillStyle = "blue";
	ctx.fillText(text, textXpos, textYpos);
}

var colors = [
	'#ffff88', '#8080ff',
	'#ffff00', '#0000ff',
	'#ff8000', '#ff0000',
	'#bf00bf', '#000080',
	'#000000', '#ffffff',
	'#660033', '#006666',
	'#606060', '#00ff00'
];

var colorSigns = [
	'5', '4',
	'Y', '6',
	'O', 'R',
	'3', '7',
	'B', 'W',
	'1', '2',
	'9', 'G'
];


function setupScreenGeometry(el) {

	el.setAttribute('width', window.screen.width);
	el.setAttribute('height', window.screen.height);

}

function goFullScreen(can) {
	if (can.requestFullScreen)
		can.requestFullScreen();
	else if (can.webkitRequestFullScreen)
		can.webkitRequestFullScreen();
	else if (can.mozRequestFullScreen)
		can.mozRequestFullScreen();
	else if (can.msRequestFullscreen)
		can.msRequestFullscreen();
}
