'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 160;
var CLOUD_Y = 85;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var maxTime = getMaxElement(times);

  var fillRectangle = function (CLOUD_X, BAR_WIDTH, SPACE, CLOUD_Y, GAP, BAR_HEIGHT, color) {
     ctx.fillStyle = color;
     ctx.fillRect(CLOUD_X + i * (BAR_WIDTH + SPACE), CLOUD_Y + GAP, BAR_WIDTH, BAR_HEIGHT);
  };

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      fillRectangle(CLOUD_X, BAR_WIDTH, SPACE, CLOUD_Y, GAP, BAR_HEIGHT, 'rgba(255, 0, 0, 1)');
    } else {
      fillRectangle(CLOUD_X, BAR_WIDTH, SPACE, CLOUD_Y, GAP, BAR_HEIGHT, 'blue');
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(CLOUD_X + i * (BAR_WIDTH + SPACE), CLOUD_Y + GAP, BAR_WIDTH, BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + i * (BAR_WIDTH + SPACE), CLOUD_Y + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime));
    ctx.fillText(names[i], CLOUD_X + i * (BAR_WIDTH + SPACE), CLOUD_Y + GAP * 3 + BAR_HEIGHT);
  }
};
