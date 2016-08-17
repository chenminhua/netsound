import request from 'request'
import { origin, globalOption } from './config'
import { deepCopy } from './util'

const getArtistAlbums = (id, limit = 5, offset = 0) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/artist/albums/${id}?offset=${offset}&limit=${limit}`
  const method = 'GET'

  Object.assign(option, {url, method})
  return new Promise(function(resolve, reject){
    request(option, (err, res, body) => {
      if(!err && res.statusCode == 200) {
        resolve(JSON.parse(body).hotAlbums)
      } else {
        resolve(err);
      }
    })
  })

}
export { getArtistAlbums }
