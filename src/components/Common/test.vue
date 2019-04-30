<template>
    <div></div>
</template>
<script>
// import axios from 'axios'
// import apiPath from 'apiPath',
import qs from 'qs'

export default {
  data () {
    return {
      namemsg: ''
    }
  },
  created () {
    console.log('a')
    this.$axios.get('http://192.168.1.106:3000/list')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios.post('http://192.168.1.106:3000/test',
      qs.stringify({
        'title': '今天张娜走丢了',
        'date': '2017.1.23',
        'info': '在石家庄天桥下边'
      }))
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    // this.$axios.post('http://192.168.1.106:3000/register',
    //   qs.stringify({
    //     'username': '今天张娜走丢了',
    //     'password': '111123'}))
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // this.$axios.post('http://192.168.1.106:3000/register',qs.stringify({
    //     'username': 'wzb',
    //     'password': 'this.password'})).then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
}
</script>
