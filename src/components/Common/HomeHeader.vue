<template>
  <div class="homeheader">
    <div class="header-container">
      <el-row>
        <el-col :span="6"><img class="logo" src="../../assets/flogo.png"></el-col>
        <el-col :span="12">
          <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" text-color="#333" :default-active="this.$route.path">
            <el-menu-item class="el-menu-txt" index="/">网站首页</el-menu-item>
            <el-menu-item class="el-menu-txt" index="/FindpeoplePage">寻人启事</el-menu-item>
            <el-menu-item class="el-menu-txt" index="/LostPage">寻物启事</el-menu-item>
            <el-menu-item class="el-menu-txt" index="/FoundPage">招领启事</el-menu-item>
            <el-menu-item class="el-menu-txt" index="/FindpetPage">找宠物启事</el-menu-item>
          </el-menu>
          <div class="line"></div>
        </el-col>
        <el-col :span="2" class="logintxtbox"><span class="logintxt" v-if="localusername == null" @click="showLogin">登录/注册</span></el-col>
        <el-col :span="2"><router-link :to="{path:'/MinePage',name:'MinePage'}"><div><h4 class="localusername">{{localusername}}</h4></div></router-link></el-col>
      </el-row>
      <!-- 登录框 -->
      <div class="account-login"></div>
        <el-dialog title='账号密码登录' :visible.sync="dialogLoginVisible" width="500px" center :before-close="handleClose">
          <el-form label-width="100px" :model="ruleForm" :rules="loginrules" ref="ruleForm" class="demo-ruleForm">
            <!-- 账户 -->
            <el-form-item label="用户名：" prop="loginname">
              <el-input auto-complete="off" placeholder="请输入用户名" v-model="ruleForm.loginname"></el-input>
              <div class="el-form-item__error">{{lnamemsg}}</div>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码：" prop="loginpsd">
              <el-input auto-complete="off" placeholder="登录密码" type="password" v-model="ruleForm.loginpsd"></el-input>
              <div class="el-form-item__error">{{lpsdmsg}}</div>
            </el-form-item>
            <el-form-item>
              <p class="forgetpsd" @click="register">注册用户</p>
              <p class="forgetpsd" @click="forgetpsd">忘记密码?</p>
            </el-form-item>
            <!-- 底部按钮 -->
            <el-form-item>
              <el-button type="primary" @click="submitloginForm('ruleForm')" style="width:120px; margin-left:50px">登录</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog title='注册用户' :visible.sync="registerdialogVisible" width="460px" center :before-close="handleClose">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名：" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
              <div class="el-form-item__error">{{namemsg}}</div>
            </el-form-item>
            <el-form-item label="手机号码：" prop="tel">
              <el-input auto-complete="off" placeholder="请输入手机号" v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input auto-complete="off" placeholder="请输入邮箱" v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Q Q：">
              <el-input auto-complete="off" placeholder="请输入QQ" v-model="qq"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="psd">
              <el-input auto-complete="off" placeholder="请输入密码" type="password" v-model="ruleForm.psd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="repsd">
              <el-input auto-complete="off" placeholder="请再次输入密码" type="repassword" v-model="ruleForm.repsd"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary" class="loginbtn" @click="registermsg">注册</el-button> -->
              <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
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

import qs from 'qs'

export default {
  name: 'HomeHeader',
  inject: ['reload'],
  data: function () {
    var checkNewPassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.ruleForm.psd) {
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }
    var checkNewassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码程度至少为6位'))
      } else {
        callback()
      }
    }
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
      ruleForm: {
        loginname: '',
        loginpsd: '',
        name: '',
        tel: '',
        email: '',
        psd: '',
        repsd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {validator: telrule, trigger: 'blur'}
        ],
        email: [
          {validator: emailrule, trigger: 'blur'}
        ],
        psd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {validator: checkNewassword, trigger: 'blur'}
        ],
        repsd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {validator: checkNewPassword2, trigger: 'blur'}
        ]
      },
      loginrules: {
        loginname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        loginpsd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {validator: checkNewassword, trigger: 'blur'}
        ]
      },
      // 登录dialog
      dialogLoginVisible: false,
      registerdialogVisible: false,
      seachData: '',
      activeIndex: '1',
      activeIndex2: '1',
      username: '',
      email: '',
      qq: '',
      password: '',
      repassword: '',
      telephone: '',
      lnamemsg: '',
      namemsg: '',
      lpsdmsg: '',
      localusername: JSON.parse(localStorage.getItem('localusername')),
      dialogForpsdVisible: false,
      form: {
        verification: 'one'
      },
      showBtn: true
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.registermsg()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitloginForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    created () {
      console.log(this.localusername)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    showLogin () {
    //   显示登录框
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
      console.log('注册')
      var aa = this
      this.$axios.post('http://192.168.1.105:3000/register',
        qs.stringify({
          username: this.ruleForm.name,
          password: this.ruleForm.psd,
          phone: this.ruleForm.tel,
          email: this.ruleForm.email,
          qq: this.qq})).then(function (response) {
        console.log('注册用户')
        console.log(response)
        if (response.data === '用户名已存在') {
          aa.namemsg = '用户名已存在'
        } else {
          alert('注册成功')
          aa.registerdialogVisible = false
          aa.password = ''
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 登录
    login () {
      var bb = this
      var cc = this
      this.$axios.get('http://192.168.1.105:3000/login?status=login&username=' + this.ruleForm.loginname + '&password=' + this.ruleForm.loginpsd)
        .then(function (response) {
          console.log(response)
          if (response.data === '用户不存在') {
            bb.lnamemsg = '用户名不存在'
          } else if (response.data === '密码错误') {
            bb.lpsdmsg = '密码错误'
            bb.lnamemsg = ''
          } else {
            alert('登录成功')
            console.log('登录')
            cc.dialogLoginVisible = false
            localStorage.setItem('localusername', JSON.stringify(bb.ruleForm.loginname))
            localStorage.setItem('localpassword', JSON.stringify(bb.ruleForm.loginpsd))
            // this.getusername()
            cc.$router.go(0)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
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
    height:120px;
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
  a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
  .localusername{
    margin-top: 15px;
    color:white;
    font-size: 25px;
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
</style>
