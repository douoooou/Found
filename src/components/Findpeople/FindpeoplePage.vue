<template>
  <div id="findpeoplepage">
      <div class="lost-one">
        <el-row>
          <el-col :span="16">
            <el-breadcrumb class="breadcrumb">
              <el-breadcrumb-item>>>寻人启事信息</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="8">
            <el-button class="lost-btn" v-show="this.localusername !== null" @click="fddialogVisible = true">填写找人信息</el-button>
            <el-tooltip content="登录后发布信息" placement="top">
              <el-button class="lost-btn" v-show="this.localusername === null">填写找人信息</el-button>
           </el-tooltip>
          </el-col>
        </el-row>
      </div>
      <el-dialog title="发布寻人启事" :visible.sync="fddialogVisible" width="40%">
        <el-form label-width="100px" :rules="findpeoplerules" ref="ruleForm" :model="ruleForm">
          <el-form-item label="标题：" prop="findpeopletitle">
            <el-input  v-model="ruleForm.findpeopletitle"></el-input>
          </el-form-item>
          <el-form-item label="详细介绍：" prop="findpeopleinfo">
            <el-input type="textarea"  v-model="ruleForm.findpeopleinfo"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" prop="peoplelianxi">
            <el-input :span="4" v-model="ruleForm.peoplelianxi" placeholder="手机号 / 邮箱 / QQ"></el-input>
          </el-form-item>
          <el-form-item>
            <label class="uploadfile">
              <input type="file" id="id" name="image" style="display:none" @change="shangc($event)" accept="image/jpg,image/jpeg,image/png">
              上传照片
            </label>
          </el-form-item>
          <el-form-item label="省市：" prop="name">
            <el-cascader style="width:540px" :options="options" v-model="selectedOptions" @change="addressChange"></el-cascader>
          </el-form-item>
          <el-form-item label="详细地点：" prop="name">
            <el-input :span="4" v-model="findpeoplearea"></el-input>
          </el-form-item>
          <el-form-item label="丢失时间：" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"  v-model="findpeoplelosttime"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="fddialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="findpeoplesubmitForm('ruleForm')"> 提  交</el-button>
        </span>
      </el-dialog>
      <div><TheCategoryr></TheCategoryr></div>
      <div class="lost-three">
        <el-row>
          <el-col :span="4" v-for="(findpeoplelist, index) in findpeoplelists" :key="index" :offset="index !== 0 || index !==5? 1 : 2">
            <router-link :to="{path:'/FindpeopleDetail',name:'FindpeopleDetail',query:{index:index}}"><el-card :body-style="{ padding: '0px' }"  shadow="hover" class="lost-card">
              <div style="padding: 14px;">
                <h4 class="hidden">{{findpeoplelist.peoptitle}}</h4>
                <div class="bottom clearfix">
                  <p class="hiddenn">{{findpeoplelist.peopcont}}</p>
                  <time class="time">{{findpeoplelist.peoppubtime | formatDate}}</time>
                </div>
                  <img :src="findpeoplelist.peoplepic" class="image">
              </div>
            </el-card></router-link>
          </el-col>
        </el-row>
        <br/>
      </div>
  </div>
</template>

<script>
import TheHeader from '../Common/TheHeader'
import TheCategoryr from '../Common/TheCategoryr'
import {formatDate} from '@/assets/js/date'
import qs from 'qs'
import {provinceAndCityData, CodeToText} from 'element-china-area-data'

export default {
  name: 'findpeoplepage',
  data () {
    return {
      options: provinceAndCityData,
      selectedOptions: [],
      findpeoplelists: [],
      fddialogVisible: false,
      // dialogImageUrl: '',
      localusername: JSON.parse(localStorage.getItem('localusername')),
      findpeoplepic: '',
      findpeoplepicfile: '',
      name: '',
      arr: '',
      pubtime: '',
      lostclassify: '',
      status: '未找回',
      findpeoplearea: '',
      peoplecity: '',
      findpeoplelosttime: '',
      picdialogVisible: false,
      currentDate: new Date(),
      ruleForm: {
        findpeopleinfo: '',
        findpeopletitle: '',
        peoplelianxi: ''
      },
      findpeoplerules: {
        findpeopletitle: [
          { required: true, message: '请输入标题，至少10个字', trigger: 'blur' },
          { min: 10, max: 20, message: '10到20个字', trigger: 'blur' }
        ],
        findpeopleinfo: [
          { required: true, message: '请输入详细介绍，至少10个字', trigger: 'blur' },
          { min: 10, message: '最少10个字', trigger: 'blur' }
        ],
        peoplelianxi: [
          { required: true, message: '请输入正确的联系方式', trigger: 'blur' }
        ]
      }
    }
  },
  filters: {
    formatDate: (time) => {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
      // 此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
    }
  },
  created () {
    console.log(this.localusername)
    console.log(this.file)
    var zz = this
    this.$axios.get('http://192.168.1.105:3000/peopsear')
      .then(function (response) {
        console.log(response.data)
        zz.findpeoplelists = response.data
        var arr = zz.findpeoplelists
        for (var i = 0; i < arr.length; i++) {
          zz.findpeoplelists[i] = arr[i]
          zz.findpeoplelists[i].peoplepic = 'http://192.168.1.105:3000/images/' + zz.findpeoplelists[i].peoplepic
        }
        console.log(zz.findpeoplelists)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    shangc (e) {
      let findpeoplepicfile = document.getElementById('id').files[0]
      console.log(findpeoplepicfile)
      let reader = new FileReader()
      let imgFile
      imgFile = reader.readAsDataURL(findpeoplepicfile)
      reader.onload = e => {
        imgFile = e.target.result
        console.log(imgFile)
        this.findpeoplepic = imgFile
        console.log(this.findpeoplepic)
        this.$axios.post('http://192.168.1.105:3000/imgadd',
          qs.stringify({
            peoptitle: this.ruleForm.findpeopletitle,
            peoplepic: this.findpeoplepic
          }))
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    findpeoplesubmitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitlostmsg()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addressChange (arr) {
      console.log(arr)
      console.log(CodeToText[arr[0]], CodeToText[arr[1]])
      this.peoplecity = CodeToText[arr[0]] + CodeToText[arr[1]]
      console.log(this.peoplecity)
    },
    submitlostmsg () {
      var myDate = new Date()
      this.pubtime = myDate.toLocaleDateString()
      var zz = this
      this.$axios.post('http://192.168.1.105:3000/peopsearadd',
        qs.stringify({
          peoptitle: this.ruleForm.findpeopletitle,
          username: this.localusername,
          peopfound: this.status,
          peoppubtime: this.pubtime,
          peopcont: this.ruleForm.findpeopleinfo,
          peoplesearplace: this.findpeoplearea,
          peoplosttime: this.findpeoplelosttime,
          peoplostcity: this.peoplecity,
          peoplianxi: this.ruleForm.peoplelianxi
        }))
        .then(function (response) {
          console.log(response)
          zz.$router.go(0)
          zz.fddialogVisible = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  components: {
    TheHeader,
    TheCategoryr
  }
  // inject: ['reload']
}
</script>

<style>
.breadcrumb{
  margin-left: 50px;
  margin-top: 40px;
  font-size: 18px;
}
.hidden{
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hiddenn{
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: -16px;
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
  height: 300px;
  margin-bottom:  30px;
}
.uploadfile{
  margin-left: -470px;
}
/* 卡片 */
 .time {
    font-size: 13px;
    color: #999;
    margin-left: 120px;
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
    border: 0.5px solid #777777;
    margin-top: 10px;
    height: 150px;
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
