<template>
  <div id="carousel">
    <el-carousel :interval="4000" type="card" height="300px" loop="true">
        <el-carousel-item v-for="item in list" :key="item">
        <img class="carousel-image" :src="item.image">
        <div class="carousel-info"><span>{{item.info}}</span></div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'content',
  data () {
    return {
      // list: [
      //   {
      //     info: "今天在家门口发现一只狗，看着很干净，并不像流浪狗，所以请狗狗的主人赶快与我联系",
      //     image: "../../static/images/timg.jpg"
      //   },
      //   {
      //     info: "本人的一摞文件貌似忘在了火车站的候车室，哪个好心人看到，请与我联系，万分感谢！",
      //     image: "../../static/images/pretermit.png"
      //   },
      //   {
      //     info: "地点：农安县。本人的身份证在今天丢失了，真的非常着急，如果看到这条失物消息，请与我联系，谢谢！！！",
      //     image: "../../static/images/shenfenzheng.jpeg"
      //   }
      // ]
    }
  }
}
</script>
<style>
  #carousel{
    margin-top: 20px;
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
    opacity:0.5;
    height: 90px;
  }
</style>
