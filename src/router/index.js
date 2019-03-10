import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import My from '../components/My.vue'
import TypeDetail from '../components/TypeDetail.vue'
import FoodDetail from '../components/FoodDetail.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooterBar: true
      }
    },
    {
      path: '/my',
      component: My,
      meta: {
        showFooterBar: true
      }
    },
    {
      path: '/typedetail',
      component: TypeDetail,
      meta: {
        showFooterBar: false
      }
    },
    {
      path: '/fooddetail',
      component: FoodDetail,
      meta: {
        showFooterBar: false
      }
    },
    {
      path: '/',
      redirect: '/home',
    }
  ]
})
