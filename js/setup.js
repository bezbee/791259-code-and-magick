'use strict';

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)] + ' ' + wizardLastNames[Math.floor(Math.random() * wizardLastNames.length)],
    coatColor: wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)],
    eyesColor: wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)] + ' ' + wizardLastNames[Math.floor(Math.random() * wizardLastNames.length)],
    coatColor: wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)],
    eyesColor: wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)] + ' ' + wizardLastNames[Math.floor(Math.random() * wizardLastNames.length)],
    coatColor: wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)],
    eyesColor: wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random() * wizardFirstNames.length)] + ' ' + wizardLastNames[Math.floor(Math.random() * wizardLastNames.length)],
    coatColor: wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)],
    eyesColor: wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)]
  }
];

var renderWizard = function (character) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = character.name;
  wizardElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
  similarListElement.appendChild(fragment);
}
