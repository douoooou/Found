<template>
  <div id="lostpage">
      <TheHeader></TheHeader>
      <div class="lost-one">
        <el-row>
          <el-col :span="16">
            <el-breadcrumb class="breadcrumb">
              <el-breadcrumb-item>>>失物信息</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="8"><el-button class="lost-btn">填写失物信息</el-button></el-col>
        </el-row>
      </div>
      <div><TheCategory></TheCategory></div>
      <div class="lost-three">
        <el-row>
          <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }"   shadow="hover">
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
import TheCategory from '../Common/TheCategory'

export default {
  name: 'Lostpage',
  data () {
    return {
      currentDate: new Date()
    }
  },
  components: {
    TheHeader,
    TheCategory
  }
}
</script>

<style>
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
