import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const rejectAuthUser = (to, from, next) => { // 인증받은 유저는 거절 하겠다는 함수
  if(store.state.isLogin == true){
    alert('이미 로그인을 하셨습니다.')
    next("/")
  } else{
    next()
  }
}

const onlyAuthUser = (t0, from, next) => { // 인증받지 않은 유저를 막는 함수 
  if(store.state.isLogin === false){
    // 아직 로그인 안된 유저는 막아야
    alert("로그인이 필요한 기능입니다.")
    next("/")
  } else{
    next()
  }
}


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */'../views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser,
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "mypage" */ '../views/Mainpage.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
      path: '/components/CoinContent/TradeBuyForm',
      name: 'TradeBuyForm',
      component: () => import(/* webpackChunkName: "TradeBuyForm" */ '../components/CoinContent/TradeBuyForm.vue')
    },{
      path: '/components/CoinContent/TradeSellForm',
      name: 'TradeSellForm',
      component: () => import(/* webpackChunkName: "TradeSellForm" */ '../components/CoinContent/TradeSellForm.vue')
    }
  ]
})











