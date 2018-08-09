const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = [];
}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.handleDataReady(data);
  });
};

Munros.prototype.handleDataReady = function (munros) {
  this.data = munros;
  console.log(this.data);
  PubSub.publish('Munros:munros-data-ready', this.data);
};

module.exports = Munros;
