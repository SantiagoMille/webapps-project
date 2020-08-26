import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router/index";
import { initFirebase } from "@/helpers/firebase";
import VueVideoPlayer from 'vue-video-player'
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" });
Vue.use(VueVideoPlayer)

initFirebase()

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
