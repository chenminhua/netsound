import request from 'request'
import { origin, globalOption } from './config'
import { deepCopy } from './util'

const search = (name = null, limit = 3, offset = 0) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/search/suggest/web`
  const form = {
    s: name,
    limit,
    type: 1,
    offset
  }
  const method = 'POST'
  Object.assign(option, { url, form, method })
  return new Promise(function(resolve, reject){
    request(option, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject(err)
      }
    })
  })
}
export { search }
