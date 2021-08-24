/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'
import { auth, challengesDB } from '../firebase'

const store = {
  state() {
    return {
      challenges: [],
      challenge: {}
    }
  },
  mutations: {
    add(state, payload) {
      state.challenges.unshift(payload)
    },
    removeAll(state) {
      state.challenges = []
    },
    updateFailed(state, { id, payload }) {
      const index = state.challenges.findIndex(
        (challenge) => challenge.id == id
      )
      state.challenges[index].failed = [payload]
    },
    updateSingle(state, payload) {
      state.challenge = payload
    }
  },
  getters: {
    challengeIndex: (state) => (id) => {
      return state.challenges.findIndex((challenge) => challenge.id == id)
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
        failed: []
      }
      const docRef = await challengesDB.add(payload)
      commit('add', {
        id: docRef.id,
        ...payload
      })
    },
    async fetchChallenge({ commit }) {
      commit('removeAll')
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
      } // else ketika datanya kosong jadi return message buat dashboard
    },
    async fetchHistory({ commit }, id) {
      const query = challengesDB
        .doc(id)
        .collection('history')
        .where('type', '==', 'failed')
      const snapshot = await query.get()
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          commit('updateFailed', { id, doc })
        })
      }
    },
    async fetchSingleChallenge({ commit, state, getters }, id) {
      // cek apakah id di state.challenge == id | kalo ada return true
      if (state.challenge && state.challenge.id == id) {
        return true
        // else if, cek apakah di state.challenges ada object.id == id | kalo ada set challenge
      } else if (getters.challengeIndex(id) != -1) {
        state.challenge = state.challenges[getters.challengeIndex(id)]
      } else {
        // else, fetch single data dan store di state.challenge
        const doc = await challengesDB.doc(id).get()
        if (doc.exists) {
          commit('updateSingle', {
            id: doc.id,
            active: doc.data().active,
            goalType: doc.data().goalType,
            title: doc.data().title,
            desc: doc.data().desc,
            startDate: doc.data().startDate.toDate(),
            endDate: doc.data().endDate.toDate(),
            failed: doc.data().failed
          })
        }
      }
    }
  }
}

export default createStore(store)
