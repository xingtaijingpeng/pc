import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
      component: () => import('../views/Home.vue')
  },
  {
    path: '/Healthy',
    name: 'Healthy',
    component: () => import('../views/Healthy.vue')
  },
 {
    path: '/FireControl',
    name: 'FireControl',
    component: () => import('../views/FireControl.vue')
  },
 {
    path: '/NewsDetails',
    name: 'NewsDetails',
    component: () => import('../views/NewsDetails.vue')
  },
 {
    path: '/PersonalClass',
    name: 'PersonalClass',
    component: () => import('../views/PersonalClass.vue')
  },
 {
    path: '/PersonalOrder',
    name: 'PersonalOrder',
    component: () => import('../views/PersonalOrder.vue')
  },
 {
    path: '/PersonalOrderUnpaid',
    name: 'PersonalOrderUnpaid',
    component: () => import('../views/PersonalOrderUnpaid.vue')
  },
 {
    path: '/PersonalMessage',
    name: 'PersonalMessage',
    component: () => import('../views/PersonalMessage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
