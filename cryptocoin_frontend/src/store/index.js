import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    names: [],
    allCoins: null
  },
  getters: {
  },
  mutations: {  // state의 상태 값을 변화
    // 로그인 성공시
    loginSuccess(state, payload){
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인 실패시
    loginError(state){
      state.isLogin = false
      state.isLoginError = true
    },
    // 로그아웃 할 때
    logout(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },

  actions: { // 다른 비지니스적인 모델을 쓸때 사용
    // 로그인 시도
    login({commit, dispatch}, loginObj){
      axios
        .post('http://3.36.109.182/login', loginObj) // 파라미터(loginObj)
        .then(res => {
          let token = res.data // 원래는 이렇게 해야함 res.data.token 
          localStorage.setItem("access_token", token)
          dispatch("getMemberInfo")
      })
      .catch(() => {
        commit("loginError")  
      });
    },
    // 로그아웃 시도
    logout({ commit }){
      commit('logout')
      router.push({name: 'home'})
    },
    getMemberInfo({ commit }){
      let token = localStorage.getItem("access_token")

      let config = {
        headers: {
          'access-token': token
        }
      }
      axios
        .get('http://3.36.109.182/user', config) // 두번째 인자로 config
        .then(response => {
          let userInfo = { 
            email: response.data.email,
            name: response.data.name,
            id: response.data.id,
          }
          commit('loginSuccess', userInfo)
          router.push({name: "mainpage"})
        })
        .catch(() => {
          commit("loginError")
      })
    },
  },
  modules: {
  }
})
























