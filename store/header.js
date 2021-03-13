// header模块

// state
export const store = () => ({
  mame: '雷小天',
  categories: []
})

// mutation
export const mutations = {
  setCategories (state, payload) {
    state.name = '全部分类'
    state.categories = payload
  }
}

// // actions
// export const actions = {
//   A_UPDATE_CATEGORIES ({ commit, cate }, payload) {
//     // 异步业务
//     commit('M_UPDATE_CATEGORIES', payload)
//   }
// }

// // getters
// export const getters = {
//   getName (state) {
//     return state.name ? '显示' : '隐藏'
//   }
// }
