<template>
  <div id="minepage">
      <MineHeader></MineHeader>
      <div class="mine-one">
        <el-row>
          <el-col :span="3"><img class="headimage" :src="headimage"></el-col>
          <el-col :span="2"><div class="mine-username">{{localusername}}</div></el-col>
          <el-col :span="11">
            <div class="mine-msg">
                <el-row>
                    <el-col :span="5"><label class="label">区域：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="area"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><label class="label">联系电话：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="telephone"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><label class="label">邮箱：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="email"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><label class="label">QQ：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="qq"></el-input>
                    </el-col>
                </el-row>
            </div>
          </el-col>
          <el-col :span="2"><el-button class="change-msg-btn" @click="msgdialogVisible = true">修改个人信息</el-button></el-col>
          <el-col :span="3"><el-button class="change-msg-btn" @click="exitlogin">退出当前用户登录</el-button></el-col>
        </el-row>
      <el-dialog title="修改个人信息" :visible.sync="msgdialogVisible" width="40%">
        <el-form label-width="100px">
          <el-form-item label="用户名：" prop="name">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="头像：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              limit="1"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="picdialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="区域：" prop="name">
            <el-input v-model="area"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="name">
            <el-input v-model="telephone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="name">
            <el-input :span="4" v-model="email"></el-input>
          </el-form-item>
          <el-form-item label="QQ：" prop="name">
            <el-input :span="4" v-model="qq"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="fddialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="fpetdialogVisible = false">提  交</el-button>
        </span>
      </el-dialog>
    </div>
        <!--面包屑导航-->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item>>我发布的</el-breadcrumb-item>
      </el-breadcrumb>
      <hr/>
      <div class="mine-two">
        <el-timeline >
            <el-timeline-item placement="top" v-for="(mypostmsg,index) in mypostarr" :key="index">
              <el-card class="mypost-card">
                <el-row class="mine-bar">
                    <el-col :span="4"><img class="mine-image" :src="image"></el-col>
                    <el-col :span="13">
                        <el-row>
                            <el-col :span="8" class="mypost-hiddenn"><h4>{{mypostmsg.title}}</h4></el-col>
                            <el-col :span="9"><p class="mine-date">{{mypostmsg.pubtime | formatDate}}</p></el-col>
                        </el-row>
                        <el-row class="mypost-hidden"><span :span="8" class="mine-txt">{{mypostmsg.sthcont}}</span></el-row>
                    </el-col>
                    <el-col :span="2.5"><el-button class="mine-btn">已招领</el-button></el-col>
                    <el-col :span="2.5"><el-button class="mine-btn" @click="delmsg(mypostmsg,index)">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <el-row class="mine-bar">
                    <el-col :span="4"><img class="mine-image" :src="image"></el-col>
                    <el-col :span="15">
                <el-row :span="24">
                    <el-col :span="9"><h4>文件丢了，关于毕业生第三方协议的文件</h4></el-col>
                    <el-col :span="9"><p class="mine-date"> 2019年2月14日</p></el-col>
                </el-row>
                <el-row><span class="mine-txt">本人的一摞文件貌似忘在了火车站的候车室，请捡到的人与我联系，万分感谢！</span></el-row>
                    </el-col>
                    <el-col :span="2"><el-button class="mine-btnn">未招领</el-button></el-col>
                    <el-col :span="2"><el-button class="mine-btn">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
        </el-timeline>
        <br/>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
import MineHeader from '../Common/MineHeader'
import {formatDate} from '@/assets/js/date'

export default {
  name: 'Minepage',
  components: {
    MineHeader
  },
  inject: ['reload'],
  filters: {
    formatDate: (time) => {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // 此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
    }
  },
  created () {
    var aa = this
    this.$axios.get('http://192.168.1.106:3000/mypost?username=' + this.localusername)
      .then(function (response) {
        console.log(response)
        aa.mypostarr = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data () {
    return {
      username: '',
      msgdialogVisible: false,
      localusername: JSON.parse(localStorage.getItem('localusername')),
      title: '',
      mypostarr: [],
      area: '北京',
      telephone: '13913211902',
      email: '1182819111@qq.com',
      qq: '1182819111',
      image: '../../static/images/pretermit.png',
      headimage: '../../static/images/timg.jpg',
      dialogImageUrl: '',
      picdialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    exitlogin () {
      localStorage.removeItem('localusername')
      this.reload()
    },
    delmsg (mypostmsg, index) {
      this.title = mypostmsg.title
      console.log(this.title)
      let yy = this
      this.$axios.get('http://192.168.1.106:3000/mypost/del?title=' + this.title)
        .then(function (response) {
          console.log(response)
          yy.mypostarr.splice(index, 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
ul li{
  list-style: none;
}
.mypost-hidden{
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9rem;
}
.mypost-hiddenn{
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9rem;
}
.breadcrumb{
    margin-left: 50px;
    margin-top: 40px;
    font-size: 18px;
}
.mine-one{
    height: 400px;
    background-color: #c0d1f0;
    margin-top: 20px;
}
.headimage{
    text-align: right;
    margin-left: 200px;
    border-radius: 50%;
    margin-top: 50px;
    width: 80px;
    height: 80px;
}
.mine-username{
    text-align: left;
    width: 50px;
    color: aliceblue;
    margin-left: 100px;
    margin-top: 80px;
    font-size: 20px;
    font-weight: 600;
}
.mine-msg{
    margin-top: 70px;
    margin-left: 220px;
    font-size: 18px;
    color: white;
}
.label{
    line-height: 60px;
}
.change-msg-btn{
    margin-top: 300px;
    background-color: #6991c7;
    color: azure;
}
.mine-two{
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 20px;
    margin-bottom: 100px;
    height: 450px;
}
.mine-bar{
    height: 90px;
    text-align: left;
}
.mine-image{
    margin-left: 20px;
    width: 120px;
    height: 80px;
    margin-top: 10px;
}
.mine-date{
    margin-left: 50px;
    padding-left: 100px;
    margin-top: 22px;
}
.mine-btn{
    margin-top: 30px;
    color:white;
    width: 100px;
    background-color: #6991c7;
}
.mine-btnn{
    margin-top: 30px;
    color:white;
    width: 100px;
    background-color: gray;
}
</style>
