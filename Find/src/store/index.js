import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultUser = ''
let defaultCor = ''
try {
  if (localStorage.user) {
    defaultUser = localStorage.user
  }
} catch (error) {}
try {
  if (localStorage.cor) {
    defaultCor = localStorage.cor
  }
} catch (error) {}

export default new Vuex.Store({
  state: {
    user: defaultUser,
    cor: defaultCor
  },
  actions: {
    changeUser (ctx, newUser) {
      ctx.commit('changeUser', newUser)
    },
    changeCor (ctx, newCor) {
      ctx.commit('changeCor', newCor)
    }
  },
  mutations: {
    changeUser (state, newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
      state.user = localStorage.user
    },
    changeCor (state, newCor) {
      localStorage.setItem('cor', JSON.stringify(newCor))
      state.cor = localStorage.cor
    }
  }
})
