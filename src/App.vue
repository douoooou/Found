<template>
  <div id="app">
    <div id="main">
      <Header></Header>
      <Carousel></Carousel>
      <Content></Content>
    </div>
    <br/>
    <div id="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Header from './components/Home/Header'
import Carousel from './components/Home/Carousel'
import Footer from './components/Home/Footer'
import Content from './components/Home/Content'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Footer,
    Content
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
