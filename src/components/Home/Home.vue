<template>
  <div class="home">
     <div class="header">Lost and Found 寻
         <span class="logintxt" @click="showLogin">登录</span>
         <!-- 登录框 -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>         
     </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
        // 登录dialog
        dialogVisible: false
    }
  },
  methods: {
    showLogin () {
    //   显示登录框
    // console.log("a")
      this.dialogVisible = true
    },
    // 登录dialog
    handleClose(done) {
    this.$confirm('确认关闭？')
        .then(_ => {
        done();
        })
        .catch(_ => {});
    }    
  }
}
</script>
<style>
  .header{
      background-color: aquamarine;
      height:70px;
      width:1200px;
  }
  .logintxt{
      font-weight: bolder;
      font-size: 20px;
  }
</style>
