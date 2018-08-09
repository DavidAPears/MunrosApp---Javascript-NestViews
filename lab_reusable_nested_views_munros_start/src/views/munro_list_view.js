const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function (container) {
  this.container =  container;

}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (evt) => {
    this.data = evt.detail;
    console.log(this.data);
    this.render();
  })
};

MunroListView.prototype.render = function () {
  console.log(this.data);
  this.data.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

module.exports = MunroListView;
