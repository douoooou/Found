<template>
  <div id="carousel">
    <el-carousel :interval="4000"  height="500px">
        <el-carousel-item v-for="(carouselilist,index) in carouselarr" :key="index">
        <img class="carousel-image" :src="carouselilist.animalpic">
        <!-- <router-link :to="{path:'/LostDetail',name:'LostDetail',query:{index:index}}"><div class="carousel-info"><span>{{carouselilist.title}}{{carouselilist.sthcont}}</span></div></router-link> -->
        </el-carousel-item>
    </el-carousel>
    <div class="container">
    <ul class="aside-items">
        <li v-for="(item, index) in carouselarr" :key="index"  class="lunboitem">
          <router-link :to="{path:'/FindpetDetail',name:'FindpetDetail',query:{index:index}}"><p class="wenzi">{{item.title}}</p></router-link>
        </li>
        <!-- <li v-if="items.length > 6" @click="more">更多</li> -->
    </ul>
  </div>
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
    this.$axios.get('http://192.168.43.126:3000/animal')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        zz.carouselarr = response.data
        var arr = zz.carouselarr
        for (var i = 0; i < arr.length; i++) {
          zz.carouselarr[i] = arr[i]
          zz.carouselarr[i].animalpic = 'http://192.168.43.126:3000/images/' + zz.carouselarr[i].animalpic
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
    width: 75%;
    margin: 0 auto;
    position: relative;
  }
  .el-carousel__item{
    /* width: 90%; */
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
    border: 1px solid #777777;
    width: 100%;
    position: relative;
    height:100%;
    overflow: hidden;
    background-size:cover;
  }
  .carousel-info{
    padding-left: 25px;
    padding-right: 50px;
    color:black;
    font-weight:bolder;
    background-color: aliceblue;
    width:470px;
    font-size: 17px;
    margin-top: 160px;
    padding-top: 30px;
    position:absolute;
    top:0;
    opacity:0.4;
    height: 90px;
  }
  .aside-items{
    margin-top: -10px;
    /* color: #777777; */
    background: rgba(0,0,0,0.6);
    width: 308px;
    height: 522px;
    position: absolute;
    margin-left: 100px;
    z-index: 777;
    top:0;
  }
  .wenzi{
    color: gray;
    font-weight: bolder;
  }
  .lunboitem{
    line-height: 40px;
    margin-left: -41px;
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    /* &:first-child{
      margin-top: 30px;
    } */
  }
  .wenzi :hover{
    color: #fff;
  }
  .lunboitem :hover{
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
  }
</style>
