'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtistAlbums = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArtistAlbums = function getArtistAlbums(id) {
  var limit = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];
  var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/artist/albums/' + id + '?offset=' + offset + '&limit=' + limit;
  var method = 'GET';

  Object.assign(option, { url: url, method: method });
  return new Promise(function (resolve, reject) {
    (0, _request2.default)(option, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body).hotAlbums);
      } else {
        resolve(err);
      }
    });
  });
};
exports.getArtistAlbums = getArtistAlbums;