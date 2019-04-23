<template>
  <div id="lostpage">
      <TheHeader></TheHeader>
      <div class="lost-one">
        <el-row>
          <el-col :span="16">
            <el-breadcrumb class="breadcrumb">
              <el-breadcrumb-item>>>丢失宠物信息</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="8"><el-button class="lost-btn">发布宠物信息</el-button></el-col>
        </el-row>
      </div>
      <div><TheCategoryc></TheCategoryc></div>
      <div class="lost-three">
        <el-row class="lost-row">
          <el-col :span="4" v-for="(o, index) in 8" :key="o" :offset="index = 0 && index ==5? 2 : 1">
            <el-card :body-style="{ padding: '0px' }"  shadow="hover" class="lost-card">
              <div style="padding: 14px;">
                <span>丢了一只小狗狗</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">查看更多</el-button>
                </div>
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </div>
            </el-card>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
  </div>
</template>

<script>
import TheHeader from '../Common/TheHeader'
import TheCategoryc from '../Common/TheCategoryc'

export default {
  name: 'Findpetpage',
  data () {
    return {
      currentDate: new Date()
    }
  },
  components: {
    TheHeader,
    TheCategoryc
  }
}
</script>

<style>
.breadcrumb{
    margin-left: 50px;
    margin-top: 40px;
    font-size: 18px;
}
.lost-btn{
    margin-top: 30px;
    font-weight: 600;
    font-size: 17px;
    color:white;
    width: 150px;
    background-color: #6991c7;
}
.lost-three{
  margin-top: 70px;
  margin-left: 150px;
}
.lost-card{
  margin-bottom:  30px;
}
/* 卡片 */
 .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
/* 卡片end */
</style>
