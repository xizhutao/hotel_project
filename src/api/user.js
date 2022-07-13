import request from '@/utils/request'
/**
 *用户登录
 * @param {object} data
 * @returns
 */
export const userLogin = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username: data.username,
      password: data.password
    }
  })
}
/**
 *用户注册
 * @param {object} data
 * @returns
 */
export const userRegister = (data) => {
  return request({
    method: 'POST',
    url: '/user/registered',
    data
  })
}
