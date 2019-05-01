<template>
  <div
    :id="tabId"
    class="tab-content"
    :class="customTabClass"
    v-if="isActive()"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    customTabClass: '',
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    tabId () {
      return `${this.$parent.TAB_ID}${this.$parent.tabs.indexOf(this)}`
    }
  },
  methods: {
    isActive () {
      return this.$parent.tabs.indexOf(this) === Number(this.$parent.active)
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
