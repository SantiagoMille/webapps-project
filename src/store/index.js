// store/index.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    getUser: state => {
      let x = localStorage.getItem('user')
      x=JSON.parse(x)
      console.log(x,state.user)
      if(state.user){
        return {'user':state.user,'storage':0}
      }else if(x){
        state.user=x
        return {'user':x,'storage':1}
      }
      return 0
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      //console.log("payload: ",payload,state.user)
      if(payload==null || !payload){
        localStorage.setItem('user', payload);
      }else{
        localStorage.setItem('user', JSON.stringify(payload));
      }
    }
  },
  actions: {}
});