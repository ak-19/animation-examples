window.onload = function() {
  window.onevent = function(e) {
    e.preventDefault();
    return false;
  };
  startImage();
  //init();
}


function startImage() {
  var canForeground = document.getElementById('canForeground');
  var ctx = canForeground.getContext('2d');
  var img = new Image();
  img.src = "play.png";
  img.onload = function () {      
    ctx.drawImage(img, 20, 20);
  };
  
  canForeground.onclick = startupEventHandler;
  
}

function startupEventHandler() {
  document.getElementById('canForeground').onclick = null;
  init();
}

function init() {

  var canBackground = document.createElement('canvas');
  var canForeground = document.getElementById('canForeground');
  setupScreenGeometry(canBackground);
  setupScreenGeometry(canForeground);
  goFullScreen(canForeground);

  var sizes = {
    width: window.screen.width,
    height: window.screen.height
  };
  
  var bHandler = new background(canBackground, sizes);
  bHandler.generateModel();
  bHandler.drawBackground();

  var mTable = new table(canForeground, sizes, canBackground, bHandler, init);
  mTable.init();
}
