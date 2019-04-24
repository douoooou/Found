<template>
  <div id="minepage">
      <TheHeader></TheHeader>
      <div class="mine-one">
        <el-row>
          <el-col :span="3"><img class="headimage" :src="headimage"></el-col>
          <el-col :span="2"><div class="mine-username">{{username}}</div></el-col>
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
          <el-col :span="3"><el-button class="change-msg-btn" @click="msgdialogVisible = true">修改个人信息</el-button></el-col>
        </el-row>
      <el-dialog title="修改个人信息" :visible.sync="msgdialogVisible" width="40%" :before-close="handleClose">
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
                    <el-col :span="5"><el-button class="mine-btn">已招领</el-button></el-col>
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
                    <el-col :span="5"><el-button class="mine-btn">已招领</el-button></el-col>
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
                    <el-col :span="5"><el-button class="mine-btnn">未招领</el-button></el-col>
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
import TheHeader from '../Common/TheHeader'

export default {
  name: 'Minepage',
  components: {
    TheHeader
  },
  data () {
    return {
      msgdialogVisible: false,
      username: '知世',
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
    }
  }
}
</script>

<style>
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
    margin-left: 80px;
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
