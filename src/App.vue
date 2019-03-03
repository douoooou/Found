<template>
  <div id="app">
    <div id="main">
      <Header></Header>
      <Carousel></carousel>
    </div>
    <div id="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Header from './components/Home/Header'
import Carousel from './components/Home/Carousel'
import Footer from './components/Home/Footer'
// import Content from './components/Home/Content'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Footer
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
  /* background-color: #FFFF66; */
}
#footer{
  height: 100px;
  /* margin-top: 800px; */
  position: relative;
  margin-bottom: 290px;
  clear: both;
}
</style>
