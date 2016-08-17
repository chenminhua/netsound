import request from 'request'
import { origin, globalOption } from './config'
import { deepCopy } from './util'

const getAlbums = (id) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/album/${id}`
  const method = 'get'
  Object.assign(option, {url, method})
  return new Promise(function(resolve, reject){
    request(option, (err, res, body) => {
      if(!err && res.statusCode == 200) {
        resolve(JSON.parse(body).album.songs)
      } else {
        reject(err);
      }
    })
  })
}
export { getAlbums }
