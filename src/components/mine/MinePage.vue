<template>
  <div id="minepage">
      <!-- <MineHeader></MineHeader> -->
      <div class="mine-one">
        <el-row v-for="(usermsgitem,index) in usermsg" :key="index">
          <el-col :span="3"></el-col>
          <!-- <el-col :span="5"><div class="mine-username">用户名：{{localusername}}</div></el-col> -->
          <el-col :span="14">
            <div class="mine-msg">
                <el-row>
                    <el-col :span="5"><label class="label">联系电话：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="usermsgitem.phone"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><label class="label">邮箱：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="usermsgitem.email"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5"><label class="label">QQ：</label></el-col>
                    <el-col :span="12">
                        <el-input disabled :value="usermsgitem.qq"></el-input>
                    </el-col>
                </el-row>
            </div>
          </el-col>
          <el-col :span="2"><el-button class="change-msg-btn" @click="msgdialogVisible = true">修改个人信息</el-button></el-col>
          <el-col :span="3"><el-button class="change-msg-btn" @click="exitlogin">退出当前用户登录</el-button></el-col>
        </el-row>
      <el-dialog title="修改个人信息" :visible.sync="msgdialogVisible" width="40%">
        <el-form label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="用户名：">
            <el-input v-model="localusername" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="头像：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="picdialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="联系电话：" prop="telephone">
            <el-input v-model="ruleForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input :span="4" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="QQ：">
            <el-input :span="4" v-model="qq"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="fddialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">提  交</el-button>
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
          <div>
            <el-timeline-item placement="top" v-for="(mypostmsg,index) in mypostarr" :key="index">
              <el-card class="mypost-card">
                <el-row class="mine-bar">
                    <router-link :to="{path:'/LostDetail',name:'LostDetail',query:{index:index}}"><el-col :span="4"><img class="mine-image" :src="mypostmsg.lookforpic"></el-col></router-link>
                    <el-col :span="13">
                        <el-row>
                            <router-link :to="{path:'/LostDetail',name:'LostDetail',query:{index:index}}"><el-col :span="8" class="mypost-hiddenn"><h4>{{mypostmsg.title}}</h4></el-col></router-link>
                            <el-col :span="9"><p class="mine-date">{{mypostmsg.pubtime | formatDate}}</p></el-col>
                        </el-row>
                        <router-link :to="{path:'/LostDetail',name:'LostDetail',query:{index:index}}"><el-row class="mypost-hidden"><span :span="8" class="mine-txt">{{mypostmsg.sthcont}}</span></el-row></router-link>
                    </el-col>
                    <el-col :span="2.5">
                        <el-button class="mine-btnn" v-show="mypostmsg.found === '未找回'" @click="changeloststatus(mypostmsg)">未找回</el-button>
                        <el-button class="mine-btn" v-show="mypostmsg.found === '已找回'" @click="changeloststatus(mypostmsg)">已找回</el-button>
                    </el-col>
                    <el-col :span="2.5"><el-button class="mine-btn" @click="delmsg(mypostmsg,index)">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </div>
          <div>
            <el-timeline-item placement="top" v-for="(peoplemsg,dindex) in peoplearr" :key="dindex">
              <el-card class="mypost-card">
                <el-row class="mine-bar">
                    <router-link :to="{path:'/FindpeopleDetail',name:'FindpeopleDetail',query:{index:dindex}}"><el-col :span="4"><img class="mine-image" :src="peoplemsg.peoplepic"></el-col></router-link>
                    <el-col :span="13">
                        <el-row>
                            <router-link :to="{path:'/FindpeopleDetail',name:'FindpeopleDetail',query:{index:dindex}}"><el-col :span="8" class="mypost-hiddenn"><h4>{{peoplemsg.peoptitle}}</h4></el-col></router-link>
                            <el-col :span="9"><p class="mine-date">{{peoplemsg.peoppubtime | formatDate}}</p></el-col>
                        </el-row>
                        <router-link :to="{path:'/FindpeopleDetail',name:'FindpeopleDetail',query:{index:dindex}}"><el-row class="mypost-hidden"><span :span="8" class="mine-txt">{{peoplemsg.peopcont}}</span></el-row></router-link>
                    </el-col>
                    <el-col :span="2.5">
                        <el-button class="mine-btnn" v-show="peoplemsg.peopfound === '未找回'" @click="changepeoplestatus(peoplemsg)">未找回</el-button>
                        <el-button class="mine-btn" v-show="peoplemsg.peopfound === '已找回'"  @click="changepeoplestatus(peoplemsg)">已找回</el-button>
                    </el-col>
                    <el-col :span="2.5"><el-button class="mine-btn" @click="delpeoplemsg(peoplemsg,dindex)">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </div>
          <div>
            <el-timeline-item placement="top" v-for="(findpetmsg,findpetindex) in findpetarr" :key="findpetindex">
              <el-card class="mypost-card">
                <el-row class="mine-bar">
                    <router-link :to="{path:'/FindpetDetail',name:'FindpetDetail',query:{index:findpetindex}}"><el-col :span="4"><img class="mine-image" :src="findpetmsg.animalpic"></el-col></router-link>
                    <el-col :span="13">
                        <el-row>
                            <router-link :to="{path:'/FindpetDetail',name:'FindpetDetail',query:{index:findpetindex}}"><el-col :span="8" class="mypost-hiddenn"><h4>{{findpetmsg.title}}</h4></el-col></router-link>
                            <el-col :span="9"><p class="mine-date">{{findpetmsg.pubtime | formatDate}}</p></el-col>
                        </el-row>
                        <router-link :to="{path:'/FindpetDetail',name:'FindpetDetail',query:{index:findpetindex}}"><el-row class="mypost-hidden"><span :span="8" class="mine-txt">{{findpetmsg.animalcont}}</span></el-row></router-link>
                    </el-col>
                    <el-col :span="2.5">
                        <el-button class="mine-btnn" v-show="findpetmsg.found === '未找回'" @click="changefindpetstatus(findpetmsg)">未找回</el-button>
                        <el-button class="mine-btn" v-show="findpetmsg.found === '已找回'" @click="changefindpetstatus(findpetmsg)">已找回</el-button>
                    </el-col>
                    <el-col :span="2.5"><el-button class="mine-btn" @click="delfindpetmsg(findpetmsg,findpetindex)">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </div>
          <div>
            <el-timeline-item placement="top" v-for="(zhaolingmsg,foundindex) in zhaolingarr" :key="foundindex">
              <el-card class="mypost-card">
                <el-row class="mine-bar">
                    <router-link :to="{path:'/FoundDetail',name:'FoundDetail',query:{index:foundindex}}"><el-col :span="4"><img class="mine-image" :src="zhaolingmsg.zhaolingpic"></el-col></router-link>
                    <el-col :span="13">
                        <el-row>
                            <router-link :to="{path:'/FoundDetail',name:'FoundDetail',query:{index:foundindex}}"><el-col :span="8" class="mypost-hiddenn"><h4>{{zhaolingmsg.title}}</h4></el-col></router-link>
                            <el-col :span="9"><p class="mine-date">{{zhaolingmsg.pubtime | formatDate}}</p></el-col>
                        </el-row>
                        <router-link :to="{path:'/FoundDetail',name:'FoundDetail',query:{index:foundindex}}"><el-row class="mypost-hidden"><span :span="8" class="mine-txt">{{zhaolingmsg.zhaolingcont}}</span></el-row></router-link>
                    </el-col>
                    <el-col :span="2.5">
                        <el-button class="mine-btnn" v-show="zhaolingmsg.found === '未招领'" @click="changefoundstatus(zhaolingmsg)">未招领</el-button>
                        <el-button class="mine-btn" v-show="zhaolingmsg.found === '已招领'" @click="changefoundstatus(zhaolingmsg)">已招领</el-button>
                    </el-col>
                    <el-col :span="2.5"><el-button class="mine-btn" @click="delfoundmsg(zhaolingmsg,foundindex)">删除信息</el-button></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </div>
        </el-timeline>
    </div>
  </div>
</template>

<script>
import MineHeader from '../Common/MineHeader'
import {formatDate} from '@/assets/js/date'
import qs from 'qs'

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
    console.log(this.status)
    var aa = this
    this.$axios.get('http://192.168.43.126:3000/usermsg?username=' + this.localusername)
      .then(function (response) {
        console.log(response.data)
        aa.usermsg = response.data
        aa.ruleForm.telephone = response.data[0]['phone']
        aa.qq = response.data[0]['qq']
        aa.ruleForm.email = response.data[0]['email']
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.get('http://192.168.43.126:3000/mypost?username=' + this.localusername)
      .then(function (response) {
        // console.log(response)
        aa.mypostarr = response.data
        var arr = aa.mypostarr
        for (var i = 0; i < arr.length; i++) {
          aa.mypostarr[i] = arr[i]
          aa.mypostarr[i].lookforpic = 'http://192.168.43.126:3000/images/' + aa.mypostarr[i].lookforpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.get('http://192.168.43.126:3000/mypeop?username=' + this.localusername)
      .then(function (response) {
        // console.log(response.data)
        aa.peoplearr = response.data
        console.log(aa.peoplearr)
        var arr = aa.peoplearr
        for (var i = 0; i < arr.length; i++) {
          aa.peoplearr[i] = arr[i]
          aa.peoplearr[i].peoplepic = 'http://192.168.43.126:3000/images/' + aa.peoplearr[i].peoplepic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.get('http://192.168.43.126:3000/myzhaoling?username=' + this.localusername)
      .then(function (response) {
        console.log(response)
        aa.zhaolingarr = response.data
        var arr = aa.zhaolingarr
        for (var i = 0; i < arr.length; i++) {
          aa.zhaolingarr[i] = arr[i]
          aa.zhaolingarr[i].zhaolingpic = 'http://192.168.43.126:3000/images/' + aa.zhaolingarr[i].zhaolingpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.get('http://192.168.43.126:3000/myanimal?username=' + this.localusername)
      .then(function (response) {
        console.log(response)
        aa.findpetarr = response.data
        var arr = aa.findpetarr
        for (var i = 0; i < arr.length; i++) {
          aa.findpetarr[i] = arr[i]
          aa.findpetarr[i].animalpic = 'http://192.168.43.126:3000/images/' + aa.findpetarr[i].animalpic
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data: function () {
    var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
    var telrule = (rule, value, callback) => {
      if (!reg.test(value)) {
        callback(new Error('请输入正确格式的手机号'))
      } else {
        callback()
      }
    }
    var regg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var emailrule = (rule, value, callback) => {
      if (!regg.test(value)) {
        callback(new Error('请输入正确格式的手机号'))
      } else {
        callback()
      }
    }
    return {
      username: '',
      msgdialogVisible: false,
      localusername: JSON.parse(localStorage.getItem('localusername')),
      status: '',
      title: '',
      peopletitle: '',
      zhaolingtitle: '',
      findpettitle: '',
      ruleForm: {
        telephone: '',
        email: ''
      },
      rules: {
        telephone: [
          {validator: telrule, trigger: 'blur'}
        ],
        email: [
          {validator: emailrule, trigger: 'blur'}
        ]
      },
      qq: '',
      usermsg: [],
      mypostarr: [],
      zhaolingarr: [],
      peoplearr: [],
      findpetarr: [],
      image: '../../static/images/pretermit.png',
      imagea: '../../static/images/pretermit.png',
      dialogImageUrl: '',
      picdialogVisible: false,
      changelosttitle: '',
      changepeopletitle: '',
      changefoundtitle: '',
      changeanimaltitle: ''
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
      // this.reload()
      this.$router.go(0)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitusermsg()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitusermsg () {
      var zz = this
      this.$axios.post('http://192.168.43.126:3000/msgchange',
        qs.stringify({
          username: this.localusername,
          phone: this.ruleForm.telephone,
          email: this.ruleForm.email,
          qq: this.qq
        }))
        .then(function (response) {
          console.log(response)
          zz.msgdialogVisible = false
          zz.$axios.get('http://192.168.43.126:3000/usermsg?username=' + zz.localusername)
            .then(function (response) {
              console.log(response.data)
              zz.usermsg = response.data
              zz.ruleForm.telephone = response.data[0]['phone']
              zz.qq = response.data[0]['qq']
              zz.ruleForm.email = response.data[0]['email']
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    delmsg (mypostmsg, index) {
      this.title = mypostmsg.title
      console.log(this.title)
      let yy = this
      this.$axios.get('http://192.168.43.126:3000/mypost/del?title=' + this.title)
        .then(function (response) {
          console.log(response)
          yy.mypostarr.splice(index, 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    delpeoplemsg (peoplemsg, dindex) {
      this.peopletitle = peoplemsg.peoptitle
      console.log(this.peopletitle)
      let nn = this
      this.$axios.get('http://192.168.43.126:3000/mypeop/del?peoptitle=' + this.peopletitle)
        .then(function (response) {
          console.log(response)
          nn.peoplearr.splice(dindex, 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    delfoundmsg (zhaolingmsg, foundindex) {
      let nn = this
      this.zhaolingtitle = zhaolingmsg.title
      console.log(this.zhaolingtitle)
      this.$axios.get('http://192.168.43.126:3000/myzhaoling/del?title=' + this.zhaolingtitle)
        .then(function (response) {
          console.log(response)
          nn.zhaolingarr.splice(foundindex, 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    delfindpetmsg (findpetmsg, findpetindex) {
      let nn = this
      this.findpettitle = findpetmsg.title
      console.log(this.findpettitle)
      this.$axios.get('http://192.168.43.126:3000/myanimal/del?title=' + this.findpettitle)
        .then(function (response) {
          console.log(response)
          nn.findpetarr.splice(findpetindex, 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeloststatus (mypostmsg) {
      var zz = this
      this.changelosttitle = mypostmsg.title
      if (mypostmsg.found === '未找回') {
        this.$axios.post('http://192.168.43.126:3000/upfound/sth',
          qs.stringify({
            title: zz.changelosttitle,
            found: '已找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.$axios.post('http://192.168.43.126:3000/upfound/sth',
          qs.stringify({
            title: zz.changelosttitle,
            found: '未找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    changepeoplestatus (peoplemsg) {
      var zz = this
      this.changepeopletitle = peoplemsg.title
      if (peoplemsg.found === '未找回') {
        this.$axios.post('http://192.168.43.126:3000/upfound/peop',
          qs.stringify({
            title: zz.changepeopletitle,
            found: '已找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.$axios.post('http://192.168.43.126:3000/upfound/peop',
          qs.stringify({
            title: zz.changepeopletitle,
            found: '未找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    changefindpetstatus (findpetmsg) {
      var zz = this
      this.changeanimaltitle = findpetmsg.title
      if (findpetmsg.found === '未找回') {
        this.$axios.post('http://192.168.43.126:3000/upfound/animal',
          qs.stringify({
            title: zz.changeanimaltitle,
            found: '已找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.$axios.post('http://192.168.43.126:3000/upfound/animal',
          qs.stringify({
            title: zz.changeanimaltitle,
            found: '未找回'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    changefoundstatus (zhaolingmsg) {
      var zz = this
      this.changefoundtitle = zhaolingmsg.title
      if (zhaolingmsg.found === '未招领') {
        this.$axios.post('http://192.168.43.126:3000/upfound/zhaoling',
          qs.stringify({
            title: zz.changefoundtitle,
            found: '已招领'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.$axios.post('http://192.168.43.126:3000/upfound/zhaoling',
          qs.stringify({
            title: zz.changefoundtitle,
            found: '未招领'
          }))
          .then(function (response) {
            console.log(response)
            zz.$router.go(0)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
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
    /* margin-top: 20px; */
}
.mine-username{
    text-align: left;
    width: 400px;
    color: aliceblue;
    margin-left: 100px;
    margin-top: 80px;
    font-size: 30px;
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
    font-weight: bolder;
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
