const RequestHelper = function (url) {
  this.url = url
}

// Makes request to API:
RequestHelper.prototype.get = function () {
  return.fetch(this.url)
  .then(response => response.json());
}

module.exports = RequestHelper;
