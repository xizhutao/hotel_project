import request from '@/utils/request'

export const getCityList = (target) => {
  return request({
    method: 'GET',
    url: `/area/city?level=${target}`
  })
}
