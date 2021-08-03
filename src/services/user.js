import { request } from '@bizfly/shared'
import ENDPOINT from '../config/endpoint'
import URL from '../config/url'

function getUserProfile() {
  return request({
    url: ENDPOINT.USER_INFO,
    method: 'get'
  })
}

export default {
  getUserProfile
}
