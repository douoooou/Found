<template>
<div class="main">
  <div class="a">
  <img :src="image" class="tupian">
  <img :src="image1" class="tupian">
  </div>
  <Carousel></Carousel>
  <div></div>
  <TheContent></TheContent>
</div>
</template>

<script type="text/javascript">
import HomeHeader from '../Common/HomeHeader.vue'
// import Test from '../Common/Test.vue'

import Carousel from './Carousel.vue'
import TheContent from './TheContent.vue'

export default{
  name: 'TheIndex',
  components: {
    HomeHeader,
    // Test,
    Carousel,
    TheContent
  },
  data () {
    return {
      image: '../../static/images/QQ截图20190508004445.jpg',
      image1: '../../static/images/QQ截图20190508110937.jpg'
    }
  }
}
</script>

<style>
.a{
  height: 420px;
}
.tupian{
  width: 50%;
  margin-bottom: 30px;
  box-shadow: 3px 3px 5px 3px #777777;
  float: left;
  height: 400px;
  margin-top: -50px;
}
</style>
