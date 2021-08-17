import { createStore } from 'vuex'
import { auth } from '../firebase'

const store = {
  state() {
    return {
      isLogin: false,
      challenges: [
        {
          id: 1,
          active: true,
          goalType: 'healthy',
          title: 'Minum air putih doang',
          desc: 'Challenge hanya minum air putih tanpa gula',
          startDate: new Date('08-17-2021'),
          endDate: new Date('08-24-2021'),
          failed: 0
        },
        {
          id: 2,
          active: true,
          goalType: 'productive',
          title: 'Reduce screen time',
          desc: 'Hanya 30 menit per hari buat liat hape',
          startDate: new Date('08-17-2021'),
          endDate: new Date('08-24-2021'),
          failed: 0
        }
      ]
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
    },
    logout({ commit }) {
      auth.signOut()
      commit('toggleLogout')
    }
  }
}

export default createStore(store)
