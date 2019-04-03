import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'
Vue.use(Vuex)
let cart = JSON.parse(localStorage.getItem('car')) || []
export default new Store({
  //类似于data
  state: {
    car: cart
  },
  //mutations实现同步操作,类似于methods
  mutations: {
    add(state, value) {
      var flag = false
      state.car.some(item => {
        if (item.id == value.id) {
          item.count += parseInt(value.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(value)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeGoods(state, id) {
      state.car.forEach(item => {
        if (item.id == id) {
          state.car.splice(id, 1)
        }
      })
    }
  },
  getters: { //类似于computed，filter
    getAllCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      });
      return c
    },
    getAllPrice(state) {
      var c = 0
      state.car.forEach(item => {
        if (item.selected === true) {
          c += item.count * item.price * 100
        }
      })
      return c
    }
  },
  //actions实现异步操作
  actions: {}
})
