'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var ESC_CODE = 27;
  var ENTER_CODE = 13;
  var icon = document.querySelector('.setup-open');
  var dialogCloseButton = document.querySelector('.setup-close');

  var closeDialog = function () {
    userDialog.classList.add('hidden');
  };

  var openDialog = function () {
    userDialog.classList.remove('hidden');
    userDialog.style.cssText = 'top: 80px; left: 50%';
  };
  var setupUser = document.querySelector('.setup-user-name');
  var onEscClose = function (evt) {
    if (evt.keyCode === ESC_CODE && document.activeElement !== setupUser) {
      closeDialog();
    }
  };

  icon.addEventListener('click', function () {
    openDialog();

    document.addEventListener('keydown', onEscClose);
    dialogCloseButton.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        closeDialog();
      }
    });
  });


  dialogCloseButton.addEventListener('click', closeDialog,
      document.removeEventListener('keydown', onEscClose));

  document.querySelector('.setup-open-icon').addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      openDialog();
    }
  });

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

})();
