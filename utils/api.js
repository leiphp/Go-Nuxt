import request from './http'

export const baseUrl = 'http://localhost:8181/'

const SUCCESS_CODE = 200

export default {
  SUCCESS_CODE,
  // 获取文章详情
  getArticle (aid) {
    return request.requestGet(baseUrl + 'v1/article', { params: { id: aid } })
  },
  // 获取分类
  getCategories () {
    return request.requestGet(baseUrl + 'v1/category/all/category')
  },
  // 获取分类内容
  getCategoryContent (materialId, page) {
    return request.requestGet(baseUrl + 'v1/user/category/' + materialId + '/' + page)
  },
  // 获取推荐分类
  getRecommendCategories () {
    return request.requestGet(baseUrl + 'v1/recommend/categories/')
  },
  // 获取测试用户
  getUser () {
    return request.requestGet(baseUrl + 'v1/user')
  }
}
