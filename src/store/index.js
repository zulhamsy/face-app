import { createStore } from 'vuex'
import { auth, challengesDB } from '../firebase'

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
      await auth.signInWithEmailAndPassword(email, password)
      commit('toggleLogin')
    },
    logout({ commit }) {
      auth.signOut()
      commit('toggleLogout')
    },
    // eslint-disable-next-line no-unused-vars
    async addChallenge({ commit }, { shortdesc, description, days, goals }) {
      const today = new Date()
      const day = 1000 * 3600 * 24 * days
      const end = new Date(today.getTime() + day)
      await challengesDB.add({
        active: true,
        goalType: goals,
        title: shortdesc,
        desc: description,
        startDate: today,
        endDate: end,
        failed: null
      })
    }
  }
}

export default createStore(store)
