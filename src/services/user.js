import { request } from '@bizfly/shared'
import ENDPOINT from '../config/endpoint'

export function getUserProfile() {
  return request({
    url: ENDPOINT.USER_INFO,
    method: 'get'
  })
}
