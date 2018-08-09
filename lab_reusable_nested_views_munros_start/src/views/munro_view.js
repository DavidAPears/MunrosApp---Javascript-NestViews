const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const meaningHeader = document.createElement('h4');
  meaningHeader.textContent = 'Meaning:';
  munroContainer.appendChild(meaningHeader);
  const meaning = this.createMunroMeaning();
  munroContainer.appendChild(meaning);

  const heightHeader = document.createElement('h4');
  heightHeader.textContent = 'Height:';
  munroContainer.appendChild(heightHeader);
  
  const height = this.createMunroHeight();
  munroContainer.appendChild(height);

  this.munrosContainer.appendChild(munroContainer);
};

MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;

  return name;
};

MunroView.prototype.createMunroMeaning = function () {
  const meaning = document.createElement('p');
  meaning.classList.add('munro-meaning');
  meaning.textContent = this.munro.meaning;

  return meaning;
};

MunroView.prototype.createMunroHeight = function () {
  const height = document.createElement('p');
  height.classList.add('munro-height');
  height.textContent = this.munro.height;

  return height;
};

module.exports = MunroView;
