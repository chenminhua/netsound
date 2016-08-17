import request from 'request'
import { origin, globalOption } from './config'
import { deepCopy } from './util'

const song = (id) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/song/detail?ids=%5B${id}%5d`
  const method = 'GET'
  Object.assign(option, { url, method })
  return new Promise(function(resolve, reject){
    request(option, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body).songs[0]);
      } else {
        reject(err)
      }
    })
  })
}
export { song }
