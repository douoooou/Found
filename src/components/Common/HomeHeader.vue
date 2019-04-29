<template>
  <div class="homeheader">
    <div class="header-container">
      <el-row>
        <el-col :span="6"><img class="logo" src="../../assets/flogo.png"></el-col>
        <el-col :span="12">
          <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" text-color="#333" :default-active="this.$route.path">
            <el-menu-item class="el-menu-txt" index="/">网站首页</el-menu-item>
            <el-menu-item index="/FindpeoplePage">寻人启事</el-menu-item>
            <el-menu-item index="/LostPage">寻物启事</el-menu-item>
            <el-menu-item index="/FoundPage">招领启事</el-menu-item>
            <el-menu-item index="/FindpetPage">找宠物启事</el-menu-item>
          </el-menu>
          <div class="line"></div>
        </el-col>
        <span @click="registermsg">hhhhhh</span>
        <el-col :span="2" class="logintxtbox"><span class="logintxt" @click="showLogin">登录/注册</span></el-col>
        <el-col :span="2"><router-link :to="{path:'/MinePage',name:'MinePage'}"><div><img class="logo" src="../../../static/images/timg.jpg"></div></router-link></el-col>
      </el-row>
      <el-row class="search">
        <el-col :span="17" class="s-con">
          <div class="seach-wrapper">
            <el-input placeholder="输入丢失物品关键字" v-model="seachData" class="search-input">
              <el-button slot="append" icon="el-icon-search" @click="seach">搜索</el-button>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <!-- 登录框 -->
      <div class="account-login"></div>
        <el-dialog title='账号密码登录' :visible.sync="dialogLoginVisible" width="460px" center :before-close="handleClose">
          <el-form>
            <!-- 账户 -->
            <el-form-item>
              <el-input auto-complete="off" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号"></el-input>
              <!-- <div class="el-form-item__error">{{UsererrorMsg}}</div> -->
            </el-form-item>
            <!-- 密码 -->
            <el-form-item>
              <el-input auto-complete="off" prefix-icon="el-icon-view" placeholder="登录密码" type="password"></el-input>
              <!-- <div v-if="errorMsg != null" class="el-form-item__error">{{errorMsg}}</div> -->
            </el-form-item>
            <!-- 自动登录 -->
            <el-form-item>
              <p class="forgetpsd" @click="register">注册用户</p>
              <p class="forgetpsd" @click="forgetpsd">忘记密码?</p>
            </el-form-item>
            <!-- 底部按钮 -->
            <el-form-item>
              <el-button type="primary" class="loginbtn" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog title='注册用户' :visible.sync="registerdialogVisible" width="460px" center :before-close="handleClose">
          <el-form>
            <el-form-item>
              <el-input auto-complete="off" placeholder="请输入用户名" v-model="username"></el-input>
              <div class="el-form-item__error">{{namemsg}}</div>
            </el-form-item>
            <el-form-item>
              <el-input auto-complete="off" placeholder="请输入手机号" type="repassword" v-model="telephone"></el-input>
              <div class="el-form-item__error">{{phonemsg}}</div>
            </el-form-item>
            <el-form-item>
              <el-input auto-complete="off" placeholder="请输入密码" type="password" v-model="password"></el-input>
              <div class="el-form-item__error">{{psdmsg}}</div>
            </el-form-item>
            <el-form-item>
              <el-input auto-complete="off" placeholder="请再次输入密码" type="repassword" v-model="repassword"></el-input>
              <div class="el-form-item__error">{{repsdmsg}}</div>
            </el-form-item>
            <!-- 底部按钮 -->
            <el-form-item>
              <el-button type="primary" class="loginbtn" @click="registermsg">注册</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
      <div class="forget-password">
        <el-dialog title="忘记密码" :visible.sync="dialogForpsdVisible" width="460px" center :before-close="handleClose">
          <el-form>
            <!-- 验证方式 -->
            <el-form-item>
              <el-select placeholder="请选择" v-model="form.verification">
                <el-option label="手机验证" value="one"></el-option>
                <el-option label="邮箱验证" value="two"></el-option>
              </el-select>
            </el-form-item>
            <!-- 获取手机验证码 -->
            <el-form v-if="form.verification==='one'">
              <el-form-item prop="phone">
                <el-input auto-complete="off" class="input-box" prefix-icon="el-icon-mobile-phone "  placeholder="请输入手机号"></el-input>
                <!-- <div class="el-form-item__error">{{phoneMsg}}</div> -->
                <el-button type="primary" v-show="showBtn" @click="getVerifyPhone" size="medium" class="getVerifybtn">获取验证码</el-button>
                <el-button type="primary" v-show="!showBtn" disabled size="medium" class="getVerifybtn">90秒后重新获取</el-button>
              </el-form-item>
              <el-form-item prop="verifyPhone">
                <el-input auto-complete="off" prefix-icon="el-icon-view" class="verify" placeholder="请输入验证码"></el-input>
                <!-- <div class="el-form-item__error">{{CodeMsg}}</div> -->
              </el-form-item>
            </el-form>
            <el-form>
              <el-form-item prop="newPassword">
                <el-input auto-complete="off" prefix-icon="el-icon-view" placeholder="请输入新密码"></el-input>
                <!-- <div class="el-form-item__error">{{psd1Msg}}</div> -->
              </el-form-item>
              <el-form-item prop="newPassword2">
                <el-input auto-complete="off" prefix-icon="el-icon-view" placeholder="确认新密码"></el-input>
                <!-- <div class="el-form-item__error">{{psd2Msg}}</div> -->
              </el-form-item>
            </el-form>
            <el-form-item>
              <el-button type="primary" class="submitbtn">提交</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
  </div>
</template>
<script>

// import axios from 'axios'
// import qs from 'qs'
export default {
  name: 'HomeHeader',
  data () {
    return {
      // 登录dialog
      dialogLoginVisible: false,
      registerdialogVisible: false,
      seachData: '',
      activeIndex: '1',
      activeIndex2: '1',
      username: '',
      password: '',
      repassword: '',
      telephone: '',
      namemsg: '',
      phonemsg: '',
      psdmsg: '',
      repsdmsg: '',
      dialogForpsdVisible: false,
      form: {
        verification: 'one'
      },
      showBtn: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    showLogin () {
    //   显示登录框
    // console.log("a")
      this.dialogLoginVisible = true
    },
    // 登录dialog
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    seach () {
    },
    register () {
      this.registerdialogVisible = true
    },
    registermsg () {
      if (this.username === '') {
        console.log('用户名为空')
        this.namemsg = '用户名不能为空'
      } else if (this.telephone === '') {
        this.namemsg = ' '
        this.phonemsg = '电话不能为空'
      } else if (this.password === '') {
        this.phonemsg = ' '
        this.psdmsg = '密码不能为空'
      } else if (this.repassword === '') {
        this.psdmsg = ''
        this.repsdmsg = '密码不能为空'
      } else if (this.password !== this.repassword) {
        this.repsdmsg = '两次密码不一致'
        console.log('aaaa')
      } else {
        this.namemsg = ''
        this.phonemsg = ''
        this.psdmsg = ''
        this.repsdmsg = ''
        console.log(this.username)
        console.log(this.password)
        console.log(this.telephone)
      }
    },
    // 登录
    login () {
    },
    forgetpsd () {
      // 显示忘记密码框
      this.dialogLoginVisible = false
      this.dialogForpsdVisible = true
    },
    getVerifyPhone () {
    }
  }
}
</script>
<style>
  .homeheader{
    height:300px;
    background-image: linear-gradient(to top, #a3bded 0%, #346ab1 100%);
  }
  .header-container{
    padding-top: 35px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
  .logo{
    width:70px;
  }
  .el-menu-demo{
    border-radius: 30px;
    padding-left: 130px;
  }
  .el-menu-txt{
    font-size: 18px;
  }
  .logintxtbox{
    margin-top: 15px;
  }
  .logintxt{
    font-weight: 600;
    font-size: 20px;
    color:white;
    margin-right: 20px;
  }
  .loginbtn{
    width: 400px;
  }
  .autologin{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    line-height: 12px;
  }
  .forgetpsd{
    width:80px;
    margin-top: 15px;
    float: right;
    text-decoration: underline;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    line-height: 12px;
  }
  .input-box{
    width:260px;
  }
  .verify{
    width:260px;
  }
  .getVerifybtn{
    width:140px;
  }
  .submitbtn{
    width:150px;
    margin-left: 130px;
  }
  .search{
    margin-top: 100px;
    margin-left: 380px;
  }
  .search-input{
    width: 600px;
    border-radius: 10px;
  }
</style>
