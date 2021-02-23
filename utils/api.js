import request from './http'

export const baseUrl = 'http://localhost:8181/'

export default {
  // 获取分类
  getCategories () {
    return request.requestGet(baseUrl + 'v1/user')
  },
  // 获取分类内容
  getCategoryContent (materialId, page) {
    return request.requestGet(baseUrl + 'v1/user/category/' + materialId + '/' + page)
  },
  // 获取推荐分类
  getRecommendCategories () {
    return request.requestGet(baseUrl + 'v1/recommend/categories/')
  }
}
