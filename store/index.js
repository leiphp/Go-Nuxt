import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = () => new Vuex.Store({
state: {
  tdInfo: {}
},
mutations: {
  newTdInfo (state, result) {
    state.tdInfo = result
  }
}
})
export default store
