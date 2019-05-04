import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TheIndex from '@/components/Home/TheIndex'
import FindpeoplePage from '@/components/Findpeople/FindpeoplePage'
import LostPage from '@/components/Lost/LostPage'
import FoundPage from '@/components/Found/FoundPage'
import FindpetPage from '@/components/Findpet/FindpetPage'
import MinePage from '@/components/Mine/MinePage'
import LostDetail from '@/components/Lost/LostDetail'
import FindpetDetail from '@/components/Findpet/FindpetDetail'
import FoundDetail from '@/components/Found/FoundDetail'
import FindpeopleDetail from '@/components/Findpeople/FindpeopleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheIndex',
      component: TheIndex
    },
    {
      path: '/findpeoplePage',
      name: 'FindpeoplePage',
      component: FindpeoplePage
    },
    {
      path: '/lostpage',
      name: 'LostPage',
      component: LostPage
    },
    {
      path: '/Foundpage',
      name: 'FoundPage',
      component: FoundPage
    },
    {
      path: '/Findpetpage',
      name: 'FindpetPage',
      component: FindpetPage
    },
    {
      path: '/Minepage',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/LostDetail',
      name: 'LostDetail',
      component: LostDetail
    },
    {
      path: '/FindpetDetail',
      name: 'FindpetDetail',
      component: FindpetDetail
    },
    {
      path: '/FoundDetail',
      name: 'FoundDetail',
      component: FoundDetail
    },
    {
      path: '/FindpeopleDetail',
      name: 'FindpeopleDetail',
      component: FindpeopleDetail
    }
  ]
})
