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
          <el-col :span="8"><el-button class="lost-btn" @click="lsdialogVisible = true">填写失物信息</el-button></el-col>
        </el-row>
      </div>
      <el-dialog title="发布寻物启事" :visible.sync="lsdialogVisible" width="40%">
        <el-form label-width="100px">
          <el-form-item label="标题：" prop="name">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="类别：">
            <el-col :span="10">
              <el-select  v-model="region" placeholder="请选择种类">
                <el-option label="身份证" value="1"></el-option>
                <el-option label="钱包" value="q"></el-option>
                <el-option label="文件" value="w"></el-option>
                <el-option label="钥匙" value="y"></el-option>
                <el-option label="其他" value="e"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="详细介绍：">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="上传照片：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              limit="2"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="picdialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="地点：" prop="name">
            <el-input :span="4"></el-input>
          </el-form-item>
          <el-form-item label="丢失时间：" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="lsdialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="fpdialogVisible = false">提  交</el-button>
        </span>
      </el-dialog>
      <div><TheCategory></TheCategory></div>
      <div class="lost-three">
        <el-row>
          <el-col :span="4" v-for="(o, index) in 8" :key="o" :offset="index = 0 && index ==5? 2 : 1">
            <!-- <p class="collabel">未招领</p> -->
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
import TheCategory from '../Common/TheCategory'

export default {
  name: 'Lostpage',
  data () {
    return {
      lsdialogVisible: false,
      region: '',
      dialogImageUrl: '',
      picdialogVisible: false,
      currentDate: new Date(),
      status: 1
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  },
  components: {
    TheHeader,
    TheCategory
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
