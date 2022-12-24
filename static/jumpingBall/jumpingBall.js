window.onload = function() {
	var canForeground = document.getElementById('canForeground');
	setupScreenGeometry(canForeground, '640', '480');
	var ctx = canForeground.getContext('2d');
	var jump = new jumper(ctx, 640, 480, report);
	jump.init();
	var btnStart = document.getElementById('btnStart');
	btnStart.onclick = function() {
		jump.stop();
		jump.start();
	};
}

function report(gravityText, velocityText, positionYText, inertionFactor) {
	document.getElementById('gravity').innerHTML = "g=" + gravityText;
	document.getElementById('velocity').innerHTML = "v=" + velocityText;
	document.getElementById('positionY').innerHTML = "y=" + positionYText;
	document.getElementById('inertionFactor').innerHTML = "bounce force=" +
		inertionFactor;
	// var gravity = gravityText;
	// var velocity = velocityText;
	// var positionY = positionYText;    
}

function setupScreenGeometry(el, w, h) {
	el.setAttribute('width', w);
	el.setAttribute('height', h);
}
