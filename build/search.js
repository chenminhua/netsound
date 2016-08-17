'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = function search() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var limit = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
  var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/search/suggest/web';
  var form = {
    s: name,
    limit: limit,
    type: 1,
    offset: offset
  };
  var method = 'POST';
  Object.assign(option, { url: url, form: form, method: method });
  return new Promise(function (resolve, reject) {
    (0, _request2.default)(option, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    });
  });
};
exports.search = search;