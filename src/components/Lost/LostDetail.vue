<template>
    <div class="lostdetail">
      <TheHeader></TheHeader>
      <div class="detail-div">
        <el-card :span="8" class="detail-card">
            <el-row><el-col :span="24"><h3>文件丢了，关于毕业生第三方协议的文件</h3></el-col></el-row>
            <el-row><el-col :span="24" class="detail-date"><p>2019年2月14日</p></el-col></el-row>
            <el-row>
                <el-col :span="11">
                    <div class="block">
                        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                        <el-carousel height="250px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="intro-div">
                        <h4>详细介绍：</h4>
                        <p>你那个给你给你加我今儿就问问我没玩动漫节安娜姐本人在海南岛。三亚沙滩。捡到女装手表。时间是三月末，可能是掉在沙滩里，被海浪冲走的
                            失主须详细叙述手表牌子，型号，遗失的大致街道地段。本人无偿寄还.你那个给你给你加我今儿就问问我没玩动漫节安娜姐本人在海南岛。三亚沙滩。捡到女装手表。时间是三月末，可能是掉在沙滩里，被海浪冲走的
                            失主须详细叙述手表牌子，型号，遗失的大致街道地段。本人无偿寄还。男方家你发你那个给你给你加我今儿就问问我没玩动漫节安娜姐本人在海南岛。三亚沙滩。捡到女装手表。时间是三月末，可能是掉在沙滩里，被海浪冲走的
                            失主须详细叙述手表牌子，型号，遗失的大致街道地段。本人无偿寄还.
                        </p>
                    </div>
                </el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>分类：</h4></el-col>
                <el-col :span="2" class="detail-txt"><p>其他</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>拾捡地点：</h4></el-col>
                <el-col :span="2" class="detail-txt"><p>故宫售票处</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>拾捡时间：</h4></el-col>
                <el-col :span="3" class="detail-txt"><p>2019年2月13日</p></el-col>
            </el-row>
            <el-row class="detail-class">
                <el-col :span="2"><h4>联系方式：</h4></el-col>
                <el-col :span="3" class="detail-txt"><p>134920299000</p></el-col>
            </el-row>
        </el-card>
      </div>
      <div></div>
    </div>
</template>

<script>
import TheHeader from '../Common/TheHeader'

export default {
  name: 'lostdetail',
  components: {
    TheHeader
  },
  data () {
    return {
      image: '../../static/images/pretermit.png'
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.detail-div{
    margin-left: 100px;
    margin-right: 100px;
}
.detail-card{
    margin-top: 50px;
}
.detail-date{
    margin-left: 370px;
}
.intro-div{
    width: 700px;
    margin-left: 30px;
}
.intro-div h4{
    text-align: left;
}
.intro-div p{
    text-align: left;
    text-indent:30px;
    letter-spacing:1px;
    line-height: 30px;
}
.detail-class{
    text-align: left;
    margin-left: 200px;
}
.detail-txt{
    margin-top: 6px;
}
</style>
