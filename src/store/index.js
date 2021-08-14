import { createStore } from 'vuex'
import { auth } from '../firebase'

const store = {
  state() {
    return {
      isLogin: false
    }
  },
  mutations: {
    toggleLogin(state) {
      state.isLogin = true
    },

    toggleLogout(state) {
      state.isLogin = false
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const cred = await auth.signInWithEmailAndPassword(email, password)
      commit('toggleLogin')
      return cred
    }
  }
}

export default createStore(store)
