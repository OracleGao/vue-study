import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import E1 from '@/components/E1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/e1',
      name: 'e1',
      component: E1
    }
  ]
})
