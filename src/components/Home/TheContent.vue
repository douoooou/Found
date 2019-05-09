<template>
  <div class="contentpage">
    <br/><br/>
    <!-- <hr/> -->
    <!-- <div class="content-one"> -->
      <!-- <router-link :to="{path:'/FindpeoplePage',name:'FindpeoplePage'}"><div class="hhh"><p>东西丢了？别着急</p></div></router-link> -->
      <!-- <router-link :to="{path:'/LostPage',name:'LostPage'}"><div class="hhh"><p>捡到东西？感谢您</p></div></router-link> -->
      <!-- <router-link :to="{path:'/FindpeoplePage',name:'FindpeoplePage'}"><div><img :src='image' class="slides"></div></router-link> -->
      <!-- <router-link :to="{path:'/LostPage',name:'LostPage'}"><div><img :src='image2' class="slides"></div></router-link>
      <router-link :to="{path:'/FoundPage',name:'FoundPage'}"><div><img :src='image3' class="slides"></div></router-link>
      <router-link :to="{path:'/FindpetPage',name:'FindpetPage'}"><div><img :src='image4' class="slides"></div></router-link> -->
    <!-- </div> -->
    <div class="content-two">
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="font-weight:bolder; margin-left:-530px;">寻物启事</span>
           <router-link :to="{path:'/LostPage',name:'LostPage'}"><el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button></router-link>
        </div>
        <ul>
          <li v-for="(lostmsg,index) in lostthingarr" :key="index" v-if='index< 6'>
            <el-row class="xunwu-item">
              <el-col :span="3"><img class="content-image" :src="lostmsg.lookforpic"></el-col>
              <el-col :span="10" class="xunwu-item-txt"><span :span="5">{{lostmsg.title}}</span></el-col>
              <el-col :span="5" class="xunwu-item-txt"><span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;{{lostmsg.pubtime | formatDate}}</span></el-col>
              <router-link :to="{path:'/LostDetail',name:'LostDetail',query:{index:index}}"><el-button type="text">&nbsp;&nbsp;查看详情</el-button></router-link>
            </el-row>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="content-two">
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="font-weight:bolder; margin-left:-530px;">招领启事</span>
          <router-link :to="{path:'/FoundPage',name:'FoundPage'}"><el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button></router-link>
        </div>
        <ul>
          <li v-for="(foundmsg,index) in foundthingarr" :key="index" v-if='index< 6'>
            <el-row class="xunwu-item">
              <el-col :span="3"><img class="content-image" :src="foundmsg.zhaolingpic"></el-col>
              <el-col :span="10" class="xunwu-item-txt"><span :span="5">{{foundmsg.title}}</span></el-col>
              <el-col :span="5" class="xunwu-item-txt"><span class="content-date">&nbsp;&nbsp;&nbsp;&nbsp;{{foundmsg.pubtime | formatDate}}</span></el-col>
              <router-link :to="{path:'/FoundDetail',name:'FoundDetail',query:{index:index}}"><el-button type="text">&nbsp;&nbsp;查看详情</el-button></router-link>
            </el-row>
          </li>
        </ul>
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
      foundthingarr: '',
      image: '../../static/images/findpeople.jpg',
      image2: '../../static/images/4da7063707d1575ddeb10bd4b7178125.jpg',
      image3: '../../static/images/d48cba30681fb2785f0ca9914b6fdcc0.jpg',
      image4: '../../static/images/5b1d53895d52f4d1d745fb1d18ff03d0.jpg'
    }
  },
  created () {
    var zz = this
    this.$axios.get('http://192.168.43.126:3000/lostthing')
      .then(function (response) {
        console.log(response.data)
        zz.lostthingarr = response.data
        console.log(zz.lostthingarr)
        var arr = zz.lostthingarr
        for (var i = 0; i < arr.length; i++) {
          zz.lostthingarr[i] = arr[i]
          zz.lostthingarr[i].lookforpic = 'http://192.168.43.126:3000/images/' + zz.lostthingarr[i].lookforpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.get('http://192.168.43.126:3000/zhaoling')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        zz.foundthingarr = response.data
        console.log(zz.foundthingarr)
        var arr = zz.foundthingarr
        for (var i = 0; i < arr.length; i++) {
          zz.foundthingarr[i] = arr[i]
          zz.foundthingarr[i].zhaolingpic = 'http://192.168.43.126:3000/images/' + zz.foundthingarr[i].zhaolingpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style>
.hhh{
  width: 37%;
  font-size: 25px;
  color: white;
  font-weight: bolder;
  padding-top: 45px;
  float: left;
  height: 120px;
  background-color: #E0E0E0;
  margin-left: 130px;
}
.slides{
  border: 0.7px solid #777777;
  box-shadow: 2px 4px 6px #777777;
  background-size: 100% 100%;
  float: left;
  margin-left: 139px;
  width: 230px;
  height: 130px;
  border-radius: 30%;
  opacity: 0.9;
}
.contentpage{
  margin-bottom: 400px;
}
.content-one{
  height: 170px;
}
.content-two{
  float: left;
  margin-left: 33px;
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
