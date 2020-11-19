// store/index.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:null
  },
  getters: {
    getUser: state => {
      let x = localStorage.getItem('user')
      x=JSON.parse(x)
      if(state.user){
        return {'user':state.user,'storage':0}
      }else if(x){
        state.user=x
        return {'user':x,'storage':1}
      }
      return 0
    },
    getUserState: state => {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = JSON.parse(JSON.stringify(payload))
      if(payload==null || !payload){
        localStorage.setItem('user', payload);
      }else{
        localStorage.setItem('user', JSON.stringify(payload));
      }
    },
    setUserState (state, payload) {
      console.log(state.user)
      let user = JSON.parse(JSON.stringify(payload))
      state.user = user
    }
  },
  actions: {}
});