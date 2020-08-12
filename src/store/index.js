import Vue from 'vue'
import Vuex from 'vuex'
import { fetchConstellationData } from '../api'
import constellations from './constellations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeConsName: '摩羯座',
    activeType: null,
    itemsCache: {}
  },
  mutations: {
    SET_ACTIVE_CONS (state, consName = '摩羯座') {
      state.activeConsName = consName
    },
    SET_ACTIVE_TYPE (state, type = 'today') {
      state.activeType = type
    },
    SET_ITEM_DATA (state) {
      // 重新赋值会触发响应
      state.itemsCache = constellations.getConstellations()
    }
  },
  actions: {
    CHANGE_CONS_NAME ({ commit, dispatch }, { consName }) {
      commit('SET_ACTIVE_CONS', consName)
      dispatch('FETCH_CONSTELLATION_DATA')
    },
    CHANGE_TYPE ({ commit, dispatch }, { type }) {
      commit('SET_ACTIVE_TYPE', type)
      dispatch('FETCH_CONSTELLATION_DATA')
    },
    FETCH_CONSTELLATION_DATA ({ state, commit }) {
      const { activeConsName, activeType } = state
      // Vuex 也是缓存的一种，请求数据是否存在
      if (activeType && activeConsName) {
        if (constellations.hasItem({ consName: activeConsName, type: activeType })) {
          console.log('资源已经获取在缓存，不必重新获取')
          return
        }
      }
      if (activeType && activeConsName) {
        fetchConstellationData({
          consName: activeConsName,
          type: activeType
        }).then(function onFetchCons (result) {
          constellations.addItem({ consName: activeConsName, type: activeType, data: result })
          commit('SET_ITEM_DATA')
        }).catch(error => console.log('获取数据发生错误：', error))
      }
    }
  },
  getters: {
    activePageData (state) {
      const { activeType, activeConsName, itemsCache } = state
      let retVal = null
      if (!activeType) {
        return retVal
      }
      if (!itemsCache[activeType]) {
        return retVal
      }
      if (itemsCache[activeType][activeConsName]) {
        retVal = itemsCache[activeType][activeConsName]
      }
      return retVal
    }
  }
})
