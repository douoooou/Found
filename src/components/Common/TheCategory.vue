<template>
<div class="category-box">
  <el-row class="category">
    <div class="categorybox">
      <el-col :span="2" v-for="item in sort" :key="item.id" :value="item.id">{{item.title}}</el-col>
    </div>
  </el-row>
  <el-row class="category">
    <div class="categorybox">
      <el-col :span="2" v-for="item in sort2" :key="item.id" :value="item.id">{{item.title}}</el-col>
    </div>
  </el-row>
  <el-row class="category2">
    <el-col :span="2" v-for="item in sort3" :key="item.id">{{item.title}}</el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: 'TheCategory',
  created () {
    // this.getData()
  },
  data () {
    return {
      tops: [],
      seconds: [],
      categoryData: [],
      sort: [{
        title: '全部',
        id: '0'
      },
      {
        title: '北京',
        id: '1'
      },
      {
        title: '天津',
        id: '2'
      },
      {
        title: '河北省',
        id: '3'
      },
      {
        title: '山西省',
        id: '4'
      },
      {
        title: '内蒙古自治区',
        id: '5'

      },
      {
        title: '辽宁省',
        id: '6'
      },
      {
        title: '吉林省',
        id: '7'
      },
      {
        title: '黑龙江省',
        id: '8'
      },
      {
        title: '上海市',
        id: '9'
      },
      {
        title: '江苏省',
        id: '10'
      },
      {
        title: '浙江省',
        id: '11'
      },
      {
        title: '安徽省',
        id: '12'
      },
      {
        title: '福建省',
        id: '13'
      },
      {
        title: '江西省',
        id: '14'
      },
      {
        title: '山东省',
        id: '15'
      },
      {
        title: '湖北省',
        id: '16'
      },
      {
        title: '河南省',
        id: '17'
      },
      {
        title: '湖南省',
        id: '18'
      },
      {
        title: '广东省',
        id: '19'
      },
      {
        title: '广西壮族自治区',
        id: '20'
      },
      {
        title: '海南省',
        id: '21'
      },
      {
        title: '重庆',
        id: '22'
      },
      {
        title: '四川省',
        id: '23'
      },
      {
        title: '贵州省',
        id: '24'
      },
      {
        title: '云南省',
        id: '25'
      },
      {
        title: '西藏自治区',
        id: '26'
      },
      {
        title: '陕西省',
        id: '27'
      },
      {
        title: '甘肃省',
        id: '28'
      },
      {
        title: '青海省',
        id: '29'
      },
      {
        title: '宁夏回族自治区',
        id: '30'
      },
      {
        title: '新疆维吾尔自治区',
        id: '31'
      },
      {
        title: '台湾省',
        id: '32'
      },
      {
        title: '香港特别行政区',
        id: '33'
      },
      {
        title: '澳门特别行政区',
        id: '34'
      }],
      sort2: [{
        title: '全部',
        id: '0'
      },
      {
        title: '身份证',
        id: '1'
      },
      {
        title: '钱包',
        id: '2'
      },
      {
        title: '文件',
        id: '3'
      },
      {
        title: '其他',
        id: '4'
      }],
      sort3: [{
        title: '全部',
        id: '0'
      },
      {
        title: '今天',
        id: '1'
      },
      {
        title: '一周内',
        id: '2'
      },
      {
        title: '一个月内',
        id: '3'
      },
      {
        title: '一年内',
        id: '4'
      }]
    }
  },
  methods: {
    // getData () {
    //   // 一级分类
    //   this.$axios.get(apiPath.outlines.tops).then((res) => {
    //     this.tops = res.data
    //   });
    //   // 二级分类
    //   this.$axios.get(apiPath.outlines.seconds).then((res) => {
    //     this.seconds = res.data
    //   })
    // },
    // getTopID (id) {
    //   console.log(id)
    //   // let ID = id;
    //   this.$axios.get(apiPath.outlines.seconds, {
    //     params: {
    //       top: id
    //     }
    //   }).then((res) => {
    //     this.seconds = res.data;
    //     console.log(res.data)
    //   });
    //   // console.log(id)
    //   this.$emit('aaa', id)
    // },
    // getSecondID (id) {
    //   this.$axios.get(apiPath.courses.courses, {
    //     params: {
    //       itemId: id
    //     }
    //   }).then(response => {
    //     this.categoryData = response.data.content;
    //     this.$emit('categoryData', this.categoryData)
    //     console.log(response.data.content)
    //   })
    // }
  }
}
</script>

<style>
.category-box {
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 15px;
}
.category {
  border-bottom: 1px solid #eee;
  /* .el-col:hover{
    color: #29A3E9;
    cursor: pointer;
  } */
}
.category2 {
  /* .el-col:hover{
    color: #29A3E9;
    cursor: pointer;
  } */
}
.category2 .el-col,
.category .el-col {
  background: #fff;
  line-height: 61px;
  height: 61px;
  font-size: 14px;
  text-align: center;
}
.selected:active{
  background-color: #29A3E9;

}
.selected{
  position: absolute;
  margin-left: 90px;
  margin-top: 40px;
  color: #FF3B3B;
  font-size:12px;
}
.category{
  position: relative;
}
</style>
