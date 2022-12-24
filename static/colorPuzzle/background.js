function background(inCan, inSizes) {
  var can = inCan;
  var sizes = inSizes;
  var model = [];
  var ctx = undefined;

  this.getModel = function() {
    return model;
  };

  this.checkHit = function(currentSquare) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var cItem = model[i][j];
        if (cItem.done) {
          continue;
        }
        if (
          cItem.x <= currentSquare.x && cItem.y <= currentSquare.y && cItem.y + cItem.size >= currentSquare.y + currentSquare.side && cItem.x + cItem.size >= currentSquare.x + currentSquare.side 
          && cItem.color === currentSquare.color
        ) {

          model[i][j].done = true;
          return true;
        }
      }
    }

    return false;
  }

  var squareSize = sizes.width > sizes.height ? sizes.height / 10 : sizes.width / 10;

  this.getSquareSize = function() {
    return squareSize;
  }

  this.generateModel = function() {
    ctx = can.getContext('2d');

    for (var i = 0; i < 8; i++) {

      model.push(new Array());
      for (var j = 0; j < 8; j++) {

        var randomColorIndex = Math.floor(Math.random() * 14);

        var color = colors[randomColorIndex];
        var text =  colorSigns[randomColorIndex];

        model[i].push(
          new backgroundCell(i * (squareSize + 2), j * (squareSize + 2), squareSize, i, j, color, text)
        );
      }
    }
  };

  this.drawBackground = function() {
    ctx.clearRect(0, 0, sizes.width, sizes.height);

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var cElem = model[i][j];
        drawSingleCell(i, j, ctx, cElem);
      }
    };
  };

  function drawSingleCell(i, j, ctx, cElem) {
    ctx.fillStyle = cElem.color;
    ctx.fillRect(cElem.x, cElem.y, cElem.size, cElem.size);
    if (cElem.done) {
      drawTextWithOutline("22px serif", ctx, cElem.text, cElem.x, cElem.y, cElem.size);
      ctx.strokeStyle = '#28d1fa';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.strokeRect(cElem.x, cElem.y, cElem.size, cElem.size);
    }else{
      drawTextWithOutline("12px serif", ctx, cElem.text, cElem.x, cElem.y, cElem.size);
    }

  }
}
