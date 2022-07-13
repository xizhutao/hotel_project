import request from '@/utils/request'
/**
 *请求轮播
 * @returns
 */
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}
export const getRentGrops = () => {
  return request({
    url: '/home/groups',
    query: {
      area: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
