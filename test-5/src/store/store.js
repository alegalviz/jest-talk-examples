import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tabs: undefined
  },
  getters: {
    getTabs: state => {
      return state.tabs
    }
  },
  mutations: {
    setTabs (state, tabs) {
      state.tabs = tabs
    }
  },
  actions: {
    GET_TABS ({ commit }) {
      return axios({
        method: 'get',
        url: 'http://www.mocky.io/v2/5b9ab9e6300000240ee7c21b'
      })
        .then(response => {
          commit('setTabs', response)
          return response
        })
        .catch(error => {
          throw error
        })
    }
  }
})

export default store
