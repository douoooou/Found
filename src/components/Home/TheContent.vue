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
        <ul>
          <li v-for="(lostmsg,index) in lostthingarr" :key="index" v-if='index< 6'>
            <el-row class="xunwu-item">
              <el-col :span="3"><img class="content-image" :src="image"></el-col>
              <el-col :span="10" class="xunwu-item-txt"><span :span="5">{{lostmsg.sthcont}}</span></el-col>
              <el-col :span="5" class="xunwu-item-txt"><span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;{{lostmsg.pubtime | formatDate}}</span></el-col>
              <router-link :to="{path:'/LostDetail',name:'LostDetail',name:'LostDetail',query:{index:index}}"><el-button type="text">&nbsp;&nbsp;查看详情</el-button></router-link>
            </el-row>
          </li>
        </ul>
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
import {formatDate} from '@/assets/js/date'

export default {
  name: 'thecontent',
  filters: {
    formatDate: (time) => {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // 此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
    }
  },
  data () {
    return {
      lostthingarr: '',
      image: '../../static/images/pretermit.png',
      image2: '../../static/images/timg.jpg',
      image3: '../../static/images/shenfenzheng.jpeg',
      image4: '../../static/images/wal.jpg'
    }
  },
  created () {
    var zz = this
    this.$axios.get('http://192.168.1.106:3000/lostthing')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        zz.lostthingarr = response.data
        console.log(zz.lostthingarr)
      })
      .catch(function (error) {
        console.log(error)
      })
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
  margin-bottom: 400px;
}
.content-one{
  height: 200px;
  margin-bottom: 20px;
}
.content-two{
  float: left;
}
ul li{
  list-style: none;
}
.box-card1{
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 700px;
}
.xunwu-item{
  line-height: 50px;
}
.xunwu-item-txt{
  text-align: left;
  margin-left: 20px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 20px;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: 10px;
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
