import request from './http'

export default {
  getCategories () {
    return request.requestGet('http://localhost:8181/v1/user')
  },
  getCategoryContent (materialId, page) {
    return request.requestGet('http://localhost:8181/v1/user/category/' + materialId + '/' + page)
  }
}
