'use strict';
(function () {

  var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var WIZARDS_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');


  var NUMBER_OF_WIZARDS_TO_COPY = 4;
  var wizards = [];
  var fragment = document.createDocumentFragment();
  var icon = document.querySelector('.setup-open');
  var dialogCloseButton = document.querySelector('.setup-close');
  var ESC_CODE = 27;
  var ENTER_CODE = 13;

  var getRandomItem = function (items) {
    return items[Math.floor(Math.random() * items.length)];
  };
  window.setup = {
    getRandomItem: getRandomItem
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

  var setupUser = document.querySelector('.setup-user-name');
  var onEscClose = function (evt) {
    if (evt.keyCode === ESC_CODE && document.activeElement !== setupUser) {
      window.dialog.close();
    }
  };

  icon.addEventListener('click', function () {
    window.dialog.open();

    document.addEventListener('keydown', onEscClose);
    dialogCloseButton.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        window.dialog.close();
      }
    });
  });


  dialogCloseButton.addEventListener('click', function () {
    window.dialog.close();
    document.removeEventListener('keydown', onEscClose);
  });

  document.querySelector('.setup-open-icon').addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      window.dialog.open();
    }
  });

})();
