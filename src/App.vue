<template>
  <div id="app">
    <div id="main">
     <router-view v-if="isRouterAlive"></router-view>
    </div>
    <br/>
    <div id="footer"><TheFooter></TheFooter></div>
  </div>
</template>

<script>
import TheFooter from './components/Common/TheFooter'

export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components: {
    TheFooter
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
  height: 100vh;
}
#main {
  min-height: calc(100% - 290px);
}
#footer {
  position: relative;
  margin-bottom: 0px;
  clear: both;
}
</style>
