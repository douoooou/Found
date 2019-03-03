<template>
  <div id="app">
    <div id="main">
      <Header></Header>
    </div>
    <!-- <img src="./assets/logo.png">SSSS -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Home/Header'
export default {
  name: 'App',
  components: {
    Header
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
#main{
  min-height: calc(100% - 290px);
  padding-bottom: 290px;
  background-color: #f6f6f6;
}
</style>
