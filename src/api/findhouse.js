import request from '@/utils/request'

/**
 *根据查询参数查询房屋
 * @param {*} query
 * @returns
 */
export const findHouse = (query) => {
  return request({
    method: 'GET',
    url: '/houses',
    params: {
      query
    }
  })
}
