<template>
<div class="main">
  <img :src="image" class="tupian">
  <Carousel></Carousel>
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
      image: '../../static/images/QQ截图20190508004445.jpg'
    }
  }
}
</script>

<style>
.tupian{
  width: 90%;
  margin-bottom: 30px;
  box-shadow: 3px 3px 5px 3px #777777;
  height: 500px;
  margin-top: -50px;
}
</style>
