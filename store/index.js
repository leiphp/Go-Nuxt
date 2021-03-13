// 主模块

// state
export const store = () => ({
  count: 1
})

// mutation
export const mutations = {
  add (state) {
    state.count++
  }
}

// // actions
// export const actions = {
//   nuxtServerInit (state, context) {
//     // 初始化数据到store当中
//     // console.log('nuxtServerInit')
//   }
// }

// // getters
// export const getters = {
//   getNav (state) {
//     return state.bNav ? '显示' : '隐藏'
//   }
// }
