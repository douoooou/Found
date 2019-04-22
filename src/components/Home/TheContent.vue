<template>
  <div class="contentpage">
    <div class="content-one">
      <router-link :to="{path:'/FindpeoplePage',name:'FindpeoplePage'}"><div class="slides slide1">找人</div></router-link>
      <router-link :to="{path:'/LostPage',name:'LostPage'}"><div class="slides slide2"><span>找物</span></div></router-link>
      <router-link :to="{path:'/FoundPage',name:'FoundPage'}"><div class="slides slide3"><span>招领</span></div></router-link>
      <router-link :to="{path:'/FindpetPage',name:'FindpetPage'}"><div class="slides slide4"><span>找宠物</span></div></router-link>
    </div>
    <hr/>
    <div class="content-two">
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="font-weight:bolder; margin-left:-530px;">寻物启事</span>
           <router-link :to="{path:'/LostPage',name:'LostPage'}"><el-button style="float: right; padding: 3px 0" type="text">更多</el-button></router-link>
        </div>
        <div class="xunwu-item">
          <img class="content-image" :src="image">
          <span>本人的一摞文件貌似忘在了火车站的候车室，请...</span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.14</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
        <div class="xunwu-item">
          <img class="content-image" :src="image">
          <span>找东西！！！身份证不见了，可能是丢在了哪里...</span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.13</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
        <div class="xunwu-item">
          <img class="content-image" :src="image">
          <span>丢了一个纸袋，纸袋里面几张纸，是我的文件，...</span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.13</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
      </el-card>
    </div>
    <div class="content-two">
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="font-weight:bolder; margin-left:-530px;">招领启事</span>
          <router-link :to="{path:'/FoundPage',name:'FoundPage'}"><el-button style="float: right; padding: 3px 0" type="text">更多</el-button></router-link>
        </div>
        <div class="zhaoling-item">
          <img class="content-image" :src="image2">
          <span>今天在家门口发现一只狗，看着很干净，并不像流... </span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.15</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
        <div class="zhaoling-item">
          <img class="content-image" :src="image3">
          <span>在路上捡到了一张身份证，失主看到就跟我联系吧... </span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.14</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
        <div class="zhaoling-item">
          <img class="content-image" :src="image4">
          <span>今天去西湖，景区的入口这里捡到了一个黑色钱包... </span>
          <span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;2019.2.13</span>
          <el-button type="text">&nbsp;&nbsp;查看详情</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'thecontent',
  data () {
    return {
      image: '../../static/images/pretermit.png',
      image2: '../../static/images/timg.jpg',
      image3: '../../static/images/shenfenzheng.jpeg',
      image4: '../../static/images/wal.jpg'
    }
  }
}
</script>
<style>
.slides{
  float: left;
  font-weight: bolder;
  margin-top: 50px;
  margin-left: 220px;
  padding-top: 50px;
  width: 130px;
  height: 70px;
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
  border-radius: 50%;
}
.slide1:hover{
  background: url(../../../static/images/findpeople.jpg) no-repeat;
  background-size: 100% 100%;
}
.slide2:hover{
  background: url(../../../static/images/lost.jpg) no-repeat;
  background-size: 100% 100%;
}
.slide3:hover{
  background: url(../../../static/images/found.jpg) no-repeat;
  background-size: 100% 100%;
}
.slide4:hover{
  background: url(../../../static/images/findpet.jpg) no-repeat;
  background-size: 100% 100%;
}
.contentpage{
  margin-bottom: 500px;
}
.content-one{
  height: 200px;
  margin-bottom: 20px;
}
.content-two{
  float: left;
}
.box-card1{
  margin-left: 50px;
  margin-top: 50px;
  width: 700px;
}
.content-image{
  width: 70px;
  height: 50px;
  margin-right: 20px;
}
.content-date{
  font-size: 14px;
  color:gray;
  margin-top:-20px;
}
</style>
