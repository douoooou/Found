<template>
  <div id="carousel">
    <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(carouselilist,index) in carouselarr" :key="index">
        <img class="carousel-image" :src="carouselilist.lookforpic">
        <div class="carousel-info"><span>{{carouselilist.title}}</span></div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'carousel',
  data () {
    return {
      carouselarr: [],
      loop: true
    }
  },
  created () {
    var zz = this
    this.$axios.get('http://192.168.1.105:3000/lostthing')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        zz.carouselarr = response.data
        var arr = zz.carouselarr
        for (var i = 0; i < arr.length; i++) {
          zz.carouselarr[i] = arr[i]
          zz.carouselarr[i].lookforpic = 'http://192.168.1.105:3000/images/' + zz.carouselarr[i].lookforpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style>
  #carousel{
    margin-left: 100px;
    width: 1400px;
    margin: 0 auto;
  }
  .el-carousel__item{
    width: 700px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel-image{
    position: relative;
    height:100%;
    width:100%;
    overflow: hidden;
    background-size:cover;
  }
  .carousel-info{
    padding-left: 30px;
    padding-right: 50px;
    color:black;
    font-weight:bold;
    background-color: aliceblue;
    width: 620px;
    margin-top: 200px;
    padding-top: 30px;
    position:absolute;
    top:0;
    opacity:0.4;
    height: 90px;
  }
</style>
