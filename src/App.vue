<template>
  <div id="app">
    <div id="main">
     <router-view></router-view>
    </div>
    <br/>
    <div id="footer"><TheFooter></TheFooter></div>
  </div>
</template>

<script>
import TheFooter from './components/Common/TheFooter'

export default {
  name: 'App',
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
