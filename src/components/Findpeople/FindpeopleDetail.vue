<template>
    <div class="FindpeopleDetail">
      <!-- <TheHeader></TheHeader> -->
      <div class="detail-div">
        <el-card :span="8" class="detail-card">
            <el-row><el-col :span="24"><h2>{{detailarr.peoptitle}}</h2></el-col></el-row>
            <el-row><el-col :span="24" class="detail-date"><p>发布时间：{{detailarr.peoppubtime  | formatDate}}</p></el-col></el-row>
            <hr/>
            <br/>
            <el-row style="margin-left:600px">
                <el-tag style="width:150px;height:50px;padding-top:8px;font-weight: bolder;font-size:17px" closable>{{detailarr.peoplostcity}}</el-tag>
                <el-tag type="danger" style="width:150px;height:50px;padding-top:8px;font-weight: bolder;font-size:17px" closable>{{detailarr.peoplosttime  | formatDate}}</el-tag>
            </el-row>
            <el-row>
                <el-col :span="10">
                  <img :src="detailarr.peoplepic" class="detailimage">
                </el-col>
                <el-col :span="9">
                    <div class="intro-div">
                        <h4>详细介绍：</h4>
                        <p>{{detailarr.peopcont}}</p>
                    </div>
                </el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>招领状态：</h4></el-col>
                <el-col :span="5" class="detailstatus"><p>{{detailarr.peopfound}}</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>拾捡地点：</h4></el-col>
                <el-col :span="7" class="detail-txt"><p>{{detailarr.peoplostcity}}{{detailarr.peoplesearplace}}</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>拾捡时间：</h4></el-col>
                <el-col :span="7" class="detail-txt"><p>{{detailarr.peoplosttime | formatDate}}</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>联系方式：</h4></el-col>
                <el-col :span="5" class="detail-txt"><p>{{detailarr.peoplianxi}}</p></el-col>
            </el-row>
        </el-card>
      </div>
      <div></div>
    </div>
</template>

<script>
import TheHeader from '../Common/TheHeader'
import {formatDate} from '@/assets/js/date'

export default {
  name: 'FindpeopleDetail',
  components: {
    TheHeader
  },
  filters: {
    formatDate: (time) => {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // 此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
    }
  },
  data () {
    return {
      detailarr: [],
      id: '',
      index: this.$route.query.index
    }
  },
  created () {
    // console.log(this.routeID)
    var zz = this
    this.$axios.get('http://192.168.1.105:3000/peopsear')
      .then(function (response) {
        console.log(response.data)
        zz.detailarr = response.data[zz.index]
        console.log(zz.detailarr)
        zz.detailarr.peoplepic = 'http://192.168.1.105:3000/images/' + zz.detailarr.peoplepic
        console.log(zz.detailarr)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.detail-div{
    margin-left: 100px;
    margin-right: 100px;
}
.detail-card{
    margin-top: 50px;
}
.detail-date{
    margin-left: 370px;
}
.detailimage{
    box-shadow: 2px 4px 6px #777777;
    height: 300px;
    margin-top: 10px;
    width: 550px;
    margin-left: 40px;
    display: block;
}
.intro-div{
    width: 700px;
    margin-left: 10px;
}
.intro-div h4{
    text-align: left;
}
.intro-div p{
    text-align: left;
    text-indent:30px;
    letter-spacing:1px;
    line-height: 30px;
}
.detail-class{
    margin-top: 20px;
    text-align: left;
    margin-left: 200px;
}
.detail-txt{
    margin-top: 6px;
    /* margin-left: -100px; */
}
.detailstatus{
    font-weight: bolder;
    margin-top: 6px;
    color: red;
}
</style>
