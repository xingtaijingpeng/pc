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
        path: '/healthy',
        name: 'Healthy',
        component: () => import('../views/Healthy.vue')
    },
    {
        path: '/fireControl',
        name: 'FireControl',
        component: () => import('../views/FireControl.vue')
    },
    {
        path: '/newsDetails/:id',
        name: 'NewsDetails',
        component: () => import('../views/NewsDetails.vue')
    },
    {
        path: '/personalClass',
        name: 'PersonalClass',
        component: () => import('../views/PersonalClass.vue')
    },
    {
        path: '/personalOrder',
        name: 'PersonalOrder',
        component: () => import('../views/PersonalOrder.vue')
    },
    {
        path: '/personalOrderUnpaid',
        name: 'PersonalOrderUnpaid',
        component: () => import('../views/PersonalOrderUnpaid.vue')
    },
    {
        path: '/personalMessage',
        name: 'PersonalMessage',
        component: () => import('../views/PersonalMessage.vue')
    },
    {
        path: '/personalSetUp',
        name: 'PersonalSetUp',
        component: () => import('../views/PersonalSetUp.vue')
    },
    {
        path: '/company',
        name: 'Company',
        component: () => import('../views/Company.vue')
    },
    {
        path: '/companyTeam',
        name: 'CompanyTeam',
        component: () => import('../views/CompanyTeam.vue')
    },
    {
        path: '/personalClassLive',
        name: 'PersonalClassLive',
        component: () => import('../views/PersonalClassLive.vue')
    },
    {
        path: '/classDetails/:id',
        name: 'ClassDetails',
        component: () => import('../views/ClassDetails.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
