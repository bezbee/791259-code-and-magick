'use strict';

(function () {
<<<<<<< HEAD

  var userDialog = document.querySelector('.setup');
=======
  var userDialog = document.querySelector('.setup');
  var ESC_CODE = 27;
  var ENTER_CODE = 13;
  var icon = document.querySelector('.setup-open');
  var dialogCloseButton = document.querySelector('.setup-close');
>>>>>>> f45941f040ea414c91ee03fd0c3bbbf47b83d4bb

  var closeDialog = function () {
    userDialog.classList.add('hidden');
  };

  var openDialog = function () {
    userDialog.classList.remove('hidden');
    userDialog.style.cssText = 'top: 80px; left: 50%';
  };

  var dialogHandle = document.querySelector('.setup-user');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialog = {
    open: openDialog,
    close: closeDialog
  };

})();
