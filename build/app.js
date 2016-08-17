'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _search = require('./search');

var _song = require('./song');

var _getArtistAlbums = require('./getArtistAlbums');

var _getAlbums = require('./getAlbums');

var api = {
  search: _search.search,
  song: _song.song,
  getArtistAlbums: _getArtistAlbums.getArtistAlbums,
  getAlbums: _getAlbums.getAlbums
};

exports.api = api;