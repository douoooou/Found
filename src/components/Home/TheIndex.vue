<template>
<div class="main">
  <div class="a">
  <div class="aa">
    <div><router-link :to="{path:'/FindpeoplePage',name:'FindpeoplePage'}"><div class="hhh"><p>东西丢了？别着急</p></div></router-link></div>
    <div><img :src="image" class="tupian"></div>
  </div>
  <div class="aa">
    <div><router-link :to="{path:'/LostPage',name:'LostPage'}"><div class="hhh"><p>捡到东西？感谢您</p></div></router-link></div>
    <div><img :src="image1" class="tupian"></div>
  </div>
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
  margin-top: 30px;
  height: 880px;
}
.aa{
  height: 430px;
}
.tupian{
  width: 50%;
  margin-bottom: 30px;
  box-shadow: 3px 3px 5px 3px #777777;
  /* float: left; */
  height: 400px;
  margin-top: -50px;
}
.tupiann{
  width: 50%;
  margin-bottom: 30px;
  box-shadow: 3px 3px 5px 3px #777777;
  float: left;
  /* float:right; */
  height: 400px;
  margin-top: -50px;
}
</style>
