import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import register from '@/components/register/register'
import Home from '@/components/Home/Home'
import companyDetails from '@/components/companyDetails/companyDetails'
import addRecruitInfo from '@/components/addRecruitInfo/addRecruitInfo'
import addCompanyInfo from '@/components/addCompanyInfo/addCompanyInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/companyDetails',
      name: 'companyDetails',
      component: companyDetails
    },
    {
      path: '/addRecruitInfo',
      name: 'addRecruitInfo',
      component: addRecruitInfo
    },
    {
      path: '/addCompanyInfo',
      name: 'addCompanyInfo',
      component: addCompanyInfo
    }
  ]
})
