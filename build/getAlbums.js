'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbums = function getAlbums(id) {
  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/album/' + id;
  var method = 'get';
  Object.assign(option, { url: url, method: method });
  return new Promise(function (resolve, reject) {
    (0, _request2.default)(option, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body).album.songs);
      } else {
        reject(err);
      }
    });
  });
};
exports.getAlbums = getAlbums;