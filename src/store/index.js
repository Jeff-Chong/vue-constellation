import Vue from 'vue'
import Vuex from 'vuex'
import { requestRejected } from '../_helpers'
import { constellationApi as api } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorMsg: '',
    fetching: false,
    fetchedCached: {},
    currentType: 'today',
    currentConsName: '摩羯座',
  },
  mutations: {
    SET_CURRENT_TYPE (state, type) {
      state.currentType = type
      state.fetching = false
      state.errorMsg = ''
    },

    SET_CURRENT_CONS (state, consName) {
      state.currentConsName = consName
      state.fetching = false
      state.errorMsg = ''
    },

    START_FETCHING (state) {
      state.fetching = true
      state.errorMsg = ''
    },
    FETCHED (state, { consName, type, data }) {
      state.fetching = false
      state.errorMsg = ''
      const typeCache = Object.assign({}, state.fetchedCached[type], { [consName]: data })
      state.fetchedCached = Object.assign({}, state.fetchedCached, { [type]: typeCache })
    },
    FETCHED_FAIL (state, message) {
      state.fetching = false
      state.errorMsg = message
    }
  },
  actions: {
    changeType ({ state, commit, dispatch }, { type = 'today' } = {}) {
      commit('SET_CURRENT_TYPE', type)
      dispatch('fetch', { consName: state.currentConsName, type })
    },

    changeConsName ({state, commit, dispatch }, { consName = '摩羯座' } = {}) {
      commit('SET_CURRENT_CONS', consName)
      dispatch('fetch', { consName, type: state.currentType })
    },

    fetch ({ commit, state }, {consName, type}) {
      if (state.fetchedCached[type] && state.fetchedCached[type][consName]) {
        return Promise.resolve(state.fetchedCached[type][consName])
      }

      commit('START_FETCHING')
      return api.fetchConstellationData({consName, type})
        .then(
          result => {
            commit('FETCHED', { consName, type, data: result})
            return result
          },
          requestRejected()
        ).catch(message => { commit('FETCHED_FAIL', message) })
    }
  },
  getters: {
    currentPageData (state) {
      const { currentType, currentConsName, fetchedCached } = state
      let retVal = null
      if (!currentType) {
        return retVal
      }
      if (!fetchedCached[currentType]) {
        return retVal
      }
      if (fetchedCached[currentType][currentConsName]) {
        retVal = fetchedCached[currentType][currentConsName]
      }

      return retVal
    }
  }
})
