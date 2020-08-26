<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        style="position:fixed; top:0; left:0; overflow-y:scroll;"
        temporary>
        <v-list nav dense>

        
          <v-list-item href="./research">
            <v-list-item-icon>
              <v-icon>mdi-feature-search-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Research</v-list-item-title>
          </v-list-item>

          <v-list-item href="./#cv">
            <v-list-item-icon>
              <v-icon>mdi-file-account</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Resume</v-list-item-title>
            
          </v-list-item>

          <v-list-item>
            <v-list-item-icon href="./projects">
              <v-icon>mdi-tools</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Projects</v-list-item-title>
            
          </v-list-item>

          <v-list-item href="./interests">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Interests</v-list-item-title>
            
          </v-list-item>

          <v-list-item href="./blog">
            <v-list-item-icon>
              <v-icon>mdi-chat</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Blog</v-list-item-title>
            
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar 
        app
        color="#4C6665"
        height="100"
        scroll-threshold='5'
        clipped-right
        elevation="0">
        <a href = './'><v-avatar

          class="mr-3"
          color="#4C6665"
          size="70"
        >
          <v-img
            contain
            max-height="70%"
            src="@/assets/logo.png"
          ></v-img>
        </v-avatar></a>
        
        <v-spacer></v-spacer>

        <v-btn title="Research" href='./research' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-feature-search-outline</v-icon>
        </v-btn>
        <v-btn title="Resume" href="./#cv" v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-file-account</v-icon>
        </v-btn>
        <v-btn title="Projects" href='./projects' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-tools</v-icon>
        </v-btn>
        <v-btn title="Interests" href="./interests" v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-heart</v-icon>
        </v-btn>
        <v-btn title="Blog" href='./blog' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-chat</v-icon>
        </v-btn>
        <v-btn v-if="$vuetify.breakpoint.smOnly||$vuetify.breakpoint.xsOnly" icon style="color:white" @click="drawer = !drawer">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
        
      </v-app-bar>

      <v-content v-if="project" fluid>
        
        <section style="background:#ffffff" id="about-me">
          <div class="py-4"></div>

          <v-container  class="text-center less-margin">
            <h2 class="display-2 black-text font-weight-bold mb-3">{{project.name}}</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>
            
            <v-row>
              <v-col cols="12" style="margin:auto">
                <v-img class="img" 
                contain :src="project.img"/>
              </v-col>
              <v-col class="black-text" cols="12" md="6" style="margin:auto">
                <h4 class='aboutMe' id='cv' v-html="project.description">
                  {{project.description}}              
                </h4>
              </v-col>
              <v-col v-if="project.video" cols="11" md='8' style="margin:auto">
                <video style="max-width:100%" class="vjs-tech video" 
                playsinline="playsinline" 
                webkit-playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5" 
                x5-video-player-fullscreen="false" 
                id="vjs_video_6661_html5_api" 
                tabindex="-1" 
                muted="muted" 
                autoplay="" 
                :src="project.video"/>
              </v-col>
              <v-col v-if="project.youtube" cols="11" md='8' style="margin:auto">
                <youtube :video-id="getIdFromUrl(project.youtube)"></youtube>
              </v-col>
              <v-col v-if="project.video2" cols="12" md='8' style="margin:auto">
                <video style="max-width:100%" class="vjs-tech video" 
                playsinline="playsinline" 
                webkit-playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5" 
                x5-video-player-fullscreen="false" 
                id="vjs_video_6661_html5_api" 
                tabindex="-1" 
                muted="muted" 
                autoplay="" 
                :src="project.video2"/>
              </v-col>
              <v-col v-if="project.img2" cols="12" md='8' style="margin:auto">
                <v-img class="img" 
                contain :src="project.img2"/>
              </v-col>
            </v-row>


          </v-container>

          <div class="py-12"></div>
        </section>

      </v-content>

      <v-footer
        class="justify-center"
        color="#4C6665"
        height="100"
      >
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
          &copy; {{ (new Date()).getFullYear() }} — Made with 💜 by Santiago Mille
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";
  var db = require("../../helpers/realtime.js");
  export default {
    name: 'ProjectsPage',
    data: () => ({
      
      drawer:false,
      project:null
    
    }),
    methods:{
      getIdFromUrl(url) {
        return getIdFromURL(url);
      },
      getOptions(url){
        console.log(url)
        return {
          height: '360',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: url.includes('selectscience')
            ?"https://www.selectscience.net/videos/SSci_CON20_SLAS_Jan20_116_Dr_Shrike_Zhang_V2.mp4"
            :url,
          }],
        }
      }
      
    },
    created(){
      let _this = this
      
      db.getProjects('/'+this.$route.query.id).then(function(snapshot) {
        // _this.posts = snapshot.val()
        //console.log(_this.$route.query.id)
        //console.log(snapshot.val())
        _this.project = snapshot.val()
      });
    }
  }
</script>
<style scoped>
.color{
  background: #4C6665;
  min-width: 100vw;
  min-height: 130vh;
}
.H04F06A{
  color: #04F06A;
}
.HFF5D73{
  color: #FF5D73;
}

.HFFA69E{
  color: #D4C5E2;
}

.H2DE1FC{
  color: #2DE1FC;
}

.HFF7E6B{
  color: #FF7E6B;
}

.Hffd33c{
  color: #ffd33c;
}

.padding-top{
  padding-top: 100px;
  padding-bottom: 0;
  margin-bottom: -5rem; 
}

.margin-top{
  margin-top: 3rem;
}

.v-list-item{
  min-height: fit-content !important;
}

.no-margin{
  margin-bottom: 2px;
}

.aboutMe{
  align-content: center;
  text-align: justify !important;
  font-weight: 200;
}

.video{
  max-width: 100% !important;
}

.bottom{
  position:absolute;                  
  bottom:0;
}

.paper-title{
  margin-top: 5px;
  margin-left: 1px;
  font-weight: 100;
}

/deep/iframe{
  max-width: 100% !important;
}

.img{
  max-width: 40%;
  max-height: 450px;
  margin: auto;
}

.poster{
  max-width: 90%;
  max-height: 750px;
  margin: auto;
}

.black-text{
  color: #464655;
}

.less-margin{
  margin: auto;
}

.link{
  text-decoration: none;
  color: #FF5D73;
}

.margin{
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.margin-about{
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.cv{
  text-align: justify;
}

@media only screen and (max-width: 960px) {
  .semi-title {
    margin-top: 3px;
    margin-left: 1px;
    font-size: 2.2vmax;
  }
  .cv-text{
    font-size: 2.2vmax;
  }
  .middle{
    padding-left: 10px;
  }
  .titlee{
    font-size: 2.5vmax;
  }
  .aboutMe{
    align-content: center;
    text-align: justify !important;
    font-weight: 200;
    margin-left: 36px;
    margin-right: 36px;
  }
  
}

@media only screen and (max-width: 1262px) {
  .img{
    max-width: 60%;
    max-height: 450px;
    margin: auto;
  }
}

</style>
