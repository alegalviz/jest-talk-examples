import Tabs from '@/components/Tabs.vue'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'

import {
  TABS
} from '../mocks/tabs.mock'

const localVue = createLocalVue()

describe('Tab.vue', () => {
  it('Render props tabs', () => {
    const tabsMocked = TABS.tabs
    const wrapper = mount(Tabs, {
      localVue,
      propsData: {
        propTabs: tabsMocked
      },
      attachToDocument: true
    })
    const tabs = wrapper.find('.tabs-component--tabs')
    debugger
    // console.log(tabs)
    expect(tabs.element.childElementCount).toBe(3)
  })
})
