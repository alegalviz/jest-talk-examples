import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store/store'

Vue.use(Vuex)

describe('Test store', () => {
  it('Action should return data', async () => {
    const tabs = await store.dispatch('GET_TABS')
    // console.log(tabs.data)
    expect(tabs.data).toBeDefined()
  })
  it('After commit return data', async () => {
    const tabs = await store.dispatch('GET_TABS')
    store.commit('setTabs', tabs.data)
    expect(store.getters.getTabs).toBeDefined()
  })
})
