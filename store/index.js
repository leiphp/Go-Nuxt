// 主模块

// state
export const store = () => ({
  bNav: false,
  bLoading: false
})

// mutation
export const mutations = {
  M_UPDATE_NAV (state, payload) {
    state.bNav = payload
  },
  M_UPDATE_LOADING (state, payload) {
    state.bLoading = payload
  }
}

// actions
export const actions = {
  nuxtServerInit (state, context) {
    // 初始化数据到store当中
    // console.log('nuxtServerInit')
  }
}

// getters
export const getters = {
  getNav (state) {
    return state.bNav ? '显示' : '隐藏'
  }
}
