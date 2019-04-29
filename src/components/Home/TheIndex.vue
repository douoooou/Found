<template>
<div class="main">
  <HomeHeader></HomeHeader>
  <Test></Test>
  <!-- <Carousel></Carousel> -->
  <TheContent></TheContent>
</div>
</template>

<script type="text/javascript">
import HomeHeader from '../Common/HomeHeader.vue'
import Test from '../Common/Test.vue'

// import Carousel from './Carousel.vue'
import TheContent from './TheContent.vue'

export default{
  name: 'TheIndex',
  components: {
    HomeHeader,
    Test,
    // Carousel,
    TheContent
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
