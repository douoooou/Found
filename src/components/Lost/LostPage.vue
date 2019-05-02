<template>
  <div id="lostpage">
      <!-- <TheHeader></TheHeader> -->
      <div class="lost-one">
        <el-row>
          <el-col :span="16">
            <el-breadcrumb class="breadcrumb">
              <el-breadcrumb-item>>>失物信息</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="8"><el-button class="lost-btn" @click="lsdialogVisible = true">填写失物信息</el-button></el-col>
        </el-row>
      </div>
      <el-dialog title="发布寻物启事" :visible.sync="lsdialogVisible" width="40%">
        <el-form label-width="100px" :rules="lostrules" ref="ruleForm" :model="ruleForm">
          <el-form-item label="标题：" prop="lostmsgtitle">
            <el-input  v-model="ruleForm.lostmsgtitle"></el-input>
          </el-form-item>
          <el-form-item label="类别：">
            <el-col :span="10">
              <el-select  v-model="lostclassify" placeholder="请选择种类">
                <el-option label="ID卡" value="s"></el-option>
                <el-option label="钱包" value="q"></el-option>
                <el-option label="文件" value="w"></el-option>
                <el-option label="钥匙" value="y"></el-option>
                <el-option label="其他" value="e"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="详细介绍：" prop="lostinfo">
            <el-input type="textarea"  v-model="ruleForm.lostinfo"></el-input>
          </el-form-item>
          <el-form-item label="上传照片：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove" v-model="lostpic">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="picdialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="省市：">
            <el-cascader style="width:530px" :options="options" v-model="selectedOptions" @change="addressChange"></el-cascader>
            <!-- <el-input :span="4" v-model="city"></el-input> -->
          </el-form-item>
          <el-form-item label="详细地点：">
            <el-input :span="4" v-model="lostarea"></el-input>
          </el-form-item>
          <el-form-item label="丢失时间：" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"  v-model="losttime"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式：" prop="lianxi">
            <el-input :span="4" v-model="ruleForm.lianxi" placeholder="手机号 / 邮箱 / QQ"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="lsdialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="lostsubmitForm('ruleForm')">提  交</el-button>
        </span>
      </el-dialog>
      <div><TheCategory></TheCategory></div>
      <div class="lost-three">
        <el-row>
          <el-col :span="4" v-for="(lostlist, index) in lostlists" :key="index" :offset="index = 0 && index ==5? 2 : 1">
            <el-card :body-style="{ padding: '0px' }"  shadow="hover" class="lost-card">
              <div style="padding: 14px;">
                <h4 class="hidden">{{lostlist.title}}</h4>
                <div class="bottom clearfix">
                  <p class="hiddenn">{{lostlist.sthcont}}</p>
                  <time class="time">{{lostlist.pubtime | formatDate}}</time>
                </div>
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </div>
            </el-card>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <el-pagination background layout="prev, pager, next" :total="800" :page-size="8"></el-pagination>
<!-- <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage" :total="totalPages" :page-size="10" v-if="totalPages > 10"> -->
      <!-- </el-pagination>-->
      </div>
  </div>
</template>

<script>
import TheHeader from '../Common/TheHeader'
import TheCategory from '../Common/TheCategory'
import {formatDate} from '@/assets/js/date'
import qs from 'qs'
import {provinceAndCityData, CodeToText} from 'element-china-area-data'

export default {
  name: 'Lostpage',
  data () {
    return {
      options: provinceAndCityData,
      selectedOptions: [],
      lostlists: '',
      lsdialogVisible: false,
      dialogImageUrl: '',
      localusername: JSON.parse(localStorage.getItem('localusername')),
      lostpic: '',
      pubtime: '',
      lostclassify: '',
      status: '未招领',
      lostarea: '',
      city: '',
      losttime: '',
      picdialogVisible: false,
      currentDate: new Date(),
      ruleForm: {
        lostmsgtitle: '',
        lostinfo: '',
        lianxi: ''
      },
      lostrules: {
        lostmsgtitle: [
          { required: true, message: '请输入标题，至少10个字', trigger: 'blur' },
          { min: 10, max: 20, message: '10到20个字', trigger: 'blur' }
        ],
        lostinfo: [
          { required: true, message: '请输入详细信息，至少10个字', trigger: 'blur' },
          { min: 10, message: '最少10个字', trigger: 'blur' }
        ],
        lianxi: [
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
    var zz = this
    this.$axios.get('http://192.168.1.106:3000/lostthing')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        zz.lostlists = response.data
        console.log(zz.lostthingarr)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    lostsubmitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitlostmsg()
          this.lsdialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addressChange (arr) {
      console.log(arr)
      console.log(CodeToText[arr[0]], CodeToText[arr[1]])
      this.city = CodeToText[arr[0]] + CodeToText[arr[1]]
      console.log(this.city)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitlostmsg () {
      var myDate = new Date()
      this.pubtime = myDate.toLocaleDateString()
      var zz = this
      this.$axios.post('http://192.168.1.106:3000/loststhadd',
        qs.stringify({
          username: this.localusername,
          lookforpic: this.lostpic,
          found: this.status,
          pubtime: this.pubtime,
          sthcont: this.ruleForm.lostinfo,
          lookforplace: this.lostarea,
          losttime: this.losttime,
          title: this.ruleForm.lostmsgtitle,
          classify: this.lostclassify,
          lostcity: this.city,
          lianxi: this.ruleForm.lianxi
        }))
        .then(function (response) {
          console.log(response)
          zz.$axios.get('http://192.168.1.106:3000/lostthing')
            .then(function (response) {
              console.log(response)
              console.log(response.data)
              zz.lostlists = response.data
              console.log(zz.lostthingarr)
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  components: {
    TheHeader,
    TheCategory
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
  margin-bottom:  30px;
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
    margin-top: 10px;
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
