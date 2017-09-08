import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Away from '@/components/Away'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/away',
      name: 'away',
      component: Away
    }
  ]
})
