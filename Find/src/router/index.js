import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Login from '@/pages/login/Login.vue'
import Register from '@/pages/register/Register.vue'
import CorLogin from '@/pages/login/CorLogin.vue'
import Student from '@/pages/student/Student.vue'
import Info from '@/pages/student/Info.vue'
import StuUpdate from '@/pages/student/StuUpdate.vue'
import Posted from '@/pages/student/Posted.vue'
import Cor from '@/pages/cor/Cor.vue'
import CorDetail from '@/pages/cor/corDetail/CorDetail.vue'
import JobList from '@/pages/job/jobList/JobList.vue'
import JobDetail from '@/pages/job/JobDetail.vue'
import PostJob from '@/pages/job/PostJob.vue'
import CorInfo from '@/pages/cor/CorInfo.vue'
import CorUpdate from '@/pages/cor/CorUpdate.vue'
import CorForm from '@/pages/cor/CorForm.vue'
import PostForm from '@/pages/student/PostForm.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/corLogin',
      name: 'CorLogin',
      component: CorLogin
    }, {
      path: '/student',
      name: 'Student',
      component: Student
    }, {
      path: '/info',
      name: 'Info',
      component: Info
    }, {
      path: '/stuUpdate',
      name: 'StuUpdate',
      component: StuUpdate
    }, {
      path: '/postJob',
      name: 'PostJob',
      component: PostJob
    }, {
      path: '/cor',
      name: 'Cor',
      component: Cor,
      hidden: true
    }, {
      path: '/corDetail',
      name: 'CorDetail',
      component: CorDetail
    }, {
      path: '/jobList',
      name: 'JobList',
      component: JobList
    }, {
      path: '/jobDetail',
      name: 'JobDetail',
      component: JobDetail
    }, {
      path: '/corInfo',
      name: 'CorInfo',
      component: CorInfo
    }, {
      path: '/corUpdate',
      name: 'CorUpdate',
      component: CorUpdate
    }, {
      path: '/corForm',
      name: 'CorForm',
      component: CorForm
    }, {
      path: '/postForm',
      name: '/PostForm',
      component: PostForm
    }, {
      path: '/posted',
      name: '/Posted',
      component: Posted
    }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const userRouter = ['Student', 'Info', 'StuUpdate', 'PostForm', 'Posted']
  const corRouter = ['Cor', 'CorInfo', 'CorUpdate', 'CorForm']
  if (userRouter.includes(to.name)) {
    if (localStorage.user) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
  if (corRouter.includes(to.name)) {
    if (localStorage.cor) {
      next()
    } else {
      router.push('/corLogin')
    }
  } else {
    next()
  }
})

export default router
