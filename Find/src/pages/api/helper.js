import axios from 'axios'
const STATUS_OK = '0'

export function get (url, params) {
  return function (params) {
    return axios.post(url, {params}).then((response) => {
      const { data } = response
      if (data.status === STATUS_OK) {
        return data.result.doc
      }
    }).catch(() => { })
  }
}
