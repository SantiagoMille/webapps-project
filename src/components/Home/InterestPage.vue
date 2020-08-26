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

      <v-content>
        
        <section style="background:#ffffff" id="about-me">
          <div class="py-4"></div>

          <v-container  class="text-center less-margin">
            <h2 class="display-2 black-text font-weight-bold mb-3">Hobbies & Interests</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            
            <v-row>
              <template v-for="(p,i) in posts">
                <v-col class="cv-text middle" cols="12" md='6' :key='i'>   
                  <v-card class="mx-auto" elevation="0">
                    <v-card-title>{{p.name}}</v-card-title>
                    <v-img
                      class="white--text align-end"
                      
                      style="background-color:#dddddd"
                      
                      :src="p.img">
                    </v-img>
                  </v-card>
                </v-col> 
              </template>
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
  var db = require("../../helpers/realtime.js");
  export default {
    name: 'InterestsPage',

    data: () => ({
      
      drawer:false,
      posts:[]
    
    }),
    methods:{
      
    },
    created(){
      let _this = this
      console.log(this.$route)
      db.getInterests('').then(function(snapshot) {
        _this.posts = snapshot.val()
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

.bottom{
  position:absolute;                  
  bottom:0;
}

.paper-title{
  margin-top: 5px;
  margin-left: 1px;
  font-weight: 100;
}

.img{
  max-width: 75%;
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

@media only screen and (max-width: 800px) {
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
}

</style>
