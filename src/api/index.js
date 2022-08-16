// 统一封装接口方法
// 每个方法负责请求一个url地址
import request from '@/utils/request'
// 获取所有频道
export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels',
    method: 'GET'
  })
}
export const login = (data) => {
  // axios内部会把对象转换为json字符串
  // 并且会把headers里的content-type修改为application/json
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      ...data
    }
  })
}
