<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <tabs>
      <tab title="Tab 1">
        Contenido del Tab 1
      </tab>
      <tab title="Tab 2">
        Contenido del Tab 2
      </tab>
      <tab title="Tab 3">
        Contenido del Tab 3
      </tab>
    </tabs>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Tabs,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
