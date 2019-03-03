<template>
  <div class="footer">
    <!-- <div class="container">
      <el-row>
        <el-col :span="6">
          <div class="logo"><img src="./pic-logo-2.png"/></div>
        </el-col>
        <el-col :span="6">
          <div>
            <h3>友情链接</h3>
            <a href="" target="_blank">失物招领</a>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <h3>联系我们</h3>
            <p>邮箱：1172010644@qq.com</p>
            <p>联系电话：11111111111</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <h3>帮助中心</h3>
            <router-link to="/helpQuestions">常见问答</router-link>
            <router-link to="/aboutus">关于我们</router-link>
          </div>
        </el-col>
      </el-row>
    </div> -->
    <el-row>
        <el-col>常见问答</el-col>
        <el-col>关于我们</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style>
.footer{
  /* background-color: #fda085; */
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
  padding: 10px 0;
  color: black;
  text-align: left;
  line-height: 20px;
}
</style>
