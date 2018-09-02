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

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + i * (BAR_WIDTH + SPACE), CLOUD_Y + GAP * 3 + BAR_HEIGHT);
  }

  for (var j = 0; j < names.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + j * (BAR_WIDTH + SPACE), CLOUD_Y + GAP, BAR_WIDTH, BAR_HEIGHT);
    } else {
      ctx.fillStyle = 'blue';
      ctx.fillRect(CLOUD_X + j * (BAR_WIDTH + SPACE), CLOUD_Y + GAP, BAR_WIDTH, BAR_HEIGHT);
    }
  }

  for (var z = 0; z < names.length; z++) {
    ctx.fillStyle = 'white';
    ctx.fillRect(CLOUD_X + z * (BAR_WIDTH + SPACE), CLOUD_Y + GAP, BAR_WIDTH, BAR_HEIGHT - BAR_HEIGHT * times[z] / maxTime);
  }

  for (var v = 0; v < names.length; v++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[v]), CLOUD_X + v * (BAR_WIDTH + SPACE), CLOUD_Y + (BAR_HEIGHT - BAR_HEIGHT * times[v] / maxTime));
  }
};