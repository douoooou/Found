import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TheIndex from '@/components/Home/TheIndex'
import FindpeoplePage from '@/components/Findpeople/FindpeoplePage'
import LostPage from '@/components/Lost/LostPage'
import FoundPage from '@/components/Found/FoundPage'
import FindpetPage from '@/components/Findpet/FindpetPage'
import MinePage from '@/components/Mine/MinePage'

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
    }
  ]
})
