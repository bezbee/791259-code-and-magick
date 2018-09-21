'use strict';

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARDS_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var NUMBER_OF_WIZARDS_TO_COPY = 4;
var wizards = [];
var fragment = document.createDocumentFragment();
var ESC_CODE = 27;
var ENTER_CODE = 13;
var icon = document.querySelector('.setup-open');
var dialogCloseButton = document.querySelector('.setup-close');

var getRandomItem = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var createWizard = function () {
  var someWizard = {
    name: getRandomItem(WIZARDS_FIRST_NAMES) + ' ' + getRandomItem(WIZARDS_LAST_NAMES),
    coatColor: getRandomItem(WIZARDS_COAT_COLORS),
    eyesColor: getRandomItem(WIZARDS_EYE_COLORS)
  };
  return someWizard;
};


for (var j = 0; j < NUMBER_OF_WIZARDS_TO_COPY; j++) {
  var oneWizard = createWizard();
  wizards.push(oneWizard);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

// Module4

var closeDialog = function () {
  userDialog.classList.add('hidden');
};

var openDialog = function () {
  userDialog.classList.remove('hidden');
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

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var inputCoatColor = document.querySelector('input[name="coat-color"]');
wizardCoat.addEventListener('click', function () {
  var randomCoatColor = getRandomItem(WIZARD_COAT_COLOR);
  wizardCoat.style.fill = randomCoatColor;
  inputCoatColor.value = randomCoatColor;
});

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var inputEyesColor = document.querySelector('input[name="eyes-color"]');
wizardEyes.addEventListener('click', function () {
  wizardEyes.setAttribute('style', 'fill');
  var randomEyesColor = getRandomItem(WIZARD_EYES_COLOR);
  wizardEyes.style.fill = randomEyesColor;
  inputEyesColor.value = randomEyesColor;
});

var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = document.querySelector('input[name="fireball-color"]');
wizardFireball.addEventListener('click', function () {
  wizardFireball.setAttribute('style', 'background-color');
  var randomFireballColor = getRandomItem(WIZARD_FIREBALL_COLOR);
  wizardFireball.style.backgroundColor = randomFireballColor;
  inputFireballColor.value = randomFireballColor;
});
