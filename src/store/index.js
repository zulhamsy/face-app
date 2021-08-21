/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'
import { auth, challengesDB } from '../firebase'

const store = {
  state() {
    return {
      challenges: []
    }
  },
  mutations: {
    add(state, payload) {
      state.challenges.unshift(payload)
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      await auth.signInWithEmailAndPassword(email, password)
    },
    logout({ commit }) {
      auth.signOut()
    },
    async addChallenge({ commit }, { shortdesc, description, days, goals }) {
      const today = new Date()
      const day = 1000 * 3600 * 24 * (days - 1)
      const end = new Date(today.getTime() + day)
      const payload = {
        active: true,
        goalType: goals,
        title: shortdesc,
        desc: description,
        startDate: today,
        endDate: end,
        failed: null
      }
      const docRef = await challengesDB.add(payload)
      commit('add', {
        id: docRef.id,
        ...payload
      })
    },
    async fetchChallenge({ commit }) {
      const snapshot = await challengesDB.where('active', '==', true).get()
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          commit('add', {
            id: doc.id,
            active: doc.data().active,
            goalType: doc.data().goalType,
            title: doc.data().title,
            desc: doc.data().desc,
            startDate: doc.data().startDate.toDate(),
            endDate: doc.data().endDate.toDate(),
            failed: doc.data().failed
          })
        })
      }
    }
  }
}

export default createStore(store)
