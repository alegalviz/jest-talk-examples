<template>
  <div class="tabs-component">
    <ul role="tablist" class="tabs-component--tabs">
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{'active': tab.isActive}"
        class="tab-header"
      >
        <a :data-tab="i" @click="selectTab($event)">{{ tab.title }}</a>
      </li>
    </ul>
    <div class="tabs-component--content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    propTabs: {
      type: Array
    }
  },
  data () {
    return {
      tabs: [],
      active: 0,
      TAB_ID: 'ubtabs'
    }
  },
  created() {
    if (!this.propTabs) {
      this.tabs = this.$children
    } else {
      this.tabs = this.propTabs
    }
  },
  methods: {
    selectTab (e) {
      this.active = e.target.dataset.tab
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-component {
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-end;
    background: #fff;
    border-bottom: solid 2px #cccccc;
    list-style: none;
    li {
      flex: 1 1 auto;
      cursor: pointer;
      color: rgb(5, 69, 89);
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      list-style: none;
      background: rgb(249, 249, 249);
      &.active {
        color: rgb(5, 69, 89);
        font-weight: bold;
        box-shadow: 0 2px 0 0 rgb(5, 69, 89);
        background: rgb(237, 237, 237);
        a {
          color: #0098C8;
        }
      }
      a {
        padding: 15px 30px;
        display: block;
        color: #7D8AA7;
      }
    }
  }
}
</style>
