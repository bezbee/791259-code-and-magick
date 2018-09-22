'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = window.setup.getRandomItem(WIZARD_COAT_COLOR);
    wizardCoat.style.fill = randomCoatColor;
    inputCoatColor.value = randomCoatColor;
  });

  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');
  wizardEyes.addEventListener('click', function () {
    wizardEyes.setAttribute('style', 'fill');
    var randomEyesColor = window.setup.getRandomItem(WIZARD_EYES_COLOR);
    wizardEyes.style.fill = randomEyesColor;
    inputEyesColor.value = randomEyesColor;
  });

  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = document.querySelector('input[name="fireball-color"]');
  wizardFireball.addEventListener('click', function () {
    wizardFireball.setAttribute('style', 'background-color');
    var randomFireballColor = window.setup.getRandomItem(WIZARD_FIREBALL_COLOR);
    wizardFireball.style.backgroundColor = randomFireballColor;
    inputFireballColor.value = randomFireballColor;
  });
})();
