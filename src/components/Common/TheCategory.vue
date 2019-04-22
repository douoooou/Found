<template>
<div class="category-box">
  <el-row class="category">
    <div class="categorybox">
      <el-col :span="2" v-for="item in sort" :key="item.id" :value="item.id">{{item.title}}</el-col>
    </div>
  </el-row>
  <el-row class="category2">
    <el-col :span="2" v-for="item in sort2" :key="item.id">{{item.title}}</el-col>
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
        title: '上海',
        id: '3'
      },
      {
        title: '广州',
        id: '4'
      },
      {
        title: '重庆',
        id: '5'

      },
      {
        title: '湖南',
        id: '6'
      },
      {
        title: '河北',
        id: '7'
      }],
      sort2: [{
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
