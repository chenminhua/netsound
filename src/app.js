import { search } from './search'
import { song } from './song'
import { getArtistAlbums } from './getArtistAlbums'
import { getAlbums } from './getAlbums'

let api = {
  search: search,
  song: song,
  getArtistAlbums: getArtistAlbums,
  getAlbums: getAlbums
}

export {api}
