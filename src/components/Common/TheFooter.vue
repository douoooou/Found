<template>
  <div class="footer">
    <el-row>
      <el-col :span="8"><img class="foot-logo" src="../../assets/flogo.png"></el-col>
      <el-col :span="6">
        <div><h3 class="foot-text1">联系我们</h3>
            <span class="foot-text2">联系电话：15792411123</span><br/><br/>
            <span class="foot-text2">邮箱：11720106987@qq.com</span>
        </div>
      </el-col>
      <el-col class="foot-line"></el-col>
      <el-col :span="5">
          <div>
            <h3 class="foot-text1">帮助中心</h3>
            <span class="foot-text2">常见问答</span><br/><br/>
            <span class="foot-text2">关于我们</span>
          </div>
      </el-col>
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
  margin-bottom: 0px;
  margin-top: 40px;
  background-color: rgb(77, 74, 74);
  height: 150px;
  padding: 10px 0;
  color: black;
  text-align: left;
  line-height: 20px;
}
.foot-logo{
  width: 100px;
  margin-left: 140px;
  margin-top: 30px;
}
.foot-text1{
  color:white;
}
.foot-text2{
  color:white;
  margin-left: 90px;
}
.foot-line{
  width: 10px;
  height:150px;
  border-right: solid #ACC0D8 1px;
  margin-right: 120px;
}
</style>
