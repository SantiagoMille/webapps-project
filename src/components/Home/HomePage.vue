<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        class="drawer"
        temporary>
        <v-list nav dense>
        
          <v-list-item href="./login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log In</v-list-item-title>
          </v-list-item>

          <v-list-item href="./signup">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-account</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Sign Up</v-list-item-title>
            
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar 
        app
        color="#FF5D73"
        height="100"
        scroll-threshold='5'
        clipped-right
        elevation="0">
        <a href = './'><v-avatar

          class="mr-3"
          color="#FF5D73"
          size="70"
        >
          <v-img
            contain
            max-height="70%"
            src="@/assets/logo.png"
          ></v-img>
        </v-avatar></a>
        <h1 class="titlee">Open Sourx</h1>
        
        <v-spacer></v-spacer>

        <v-btn class="bar-b" title="Log In" href='./login' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-login</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Sign Up" href='./signup' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-clipboard-account</v-icon>
        </v-btn>
        <v-btn class="bar-b" v-if="$vuetify.breakpoint.smOnly||$vuetify.breakpoint.xsOnly" icon style="color:white" @click="drawer = !drawer">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>

      </v-app-bar>

      <v-content>
        <section id="hero">
          <v-row no-gutters>
            <div class="color">
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                  >
                    <v-col
                      class="white--text text-start"
                      cols="12"
                      tag="h1"
                    >
                      <span
                        class="font-weight-light"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      >
                        We have open-source projects on
                      </span>

                      <br>

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1 '+color: 'display-2 '+color]"
                        class="font-weight-black"
                      >
                        {{text}}
                      </span>

                    </v-col>
                    <v-col class="padding-top align-self-end">
                      <v-btn target="_blank" href="https://www.linkedin.com/in/luissantiagomille/" icon style="color:white">
                        <v-icon >mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn target='_blank' href="https://www.facebook.com/santiago.mille" icon style="color:white">
                        <v-icon >mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='https://instagram.com/santiagomille' style="color:white">
                        <v-icon >mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='https://github.com/SantiagoMille' style="color:white">
                        <v-icon >mdi-github</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='mailto:santiago.mille96@gmail.com' style="color:white">
                        <v-icon >mdi-email</v-icon>
                      </v-btn>
                    </v-col>

                  </v-row>
                </v-container>
              </v-theme-provider>
            </div>
          </v-row>
        </section>

        <section class='background' id="about-me">
          <div class="py-12"></div>

          <v-container  class="text-center less-margin">
            <h2 class="display-2 black-text font-weight-bold mb-3 page-title">ABOUT THE PROYECT</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <v-row class='margin-about'>
    
              <v-col class="black-text" cols="12">
                <h3 class='aboutPro' id='about'>
                  We are a hub where you can find open-source projects about virtually anything. 
                  We love applied science and technology and know how important it is to share this knowledge with the community. 
                  We created this platform to share open-source projects so that anyone can download, modify and implement them.
                  <br>
                  <br>
                  Progress can only be achieved when we share.
              
                </h3>
              </v-col>
            </v-row>
            <v-row class='margin-about'>
              <v-col class="black-text" cols="12" md="6">
                <v-img
                  contain
                  max-height="50%"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7195e121-eded-45cf-9aab-909deebd81b2/d9ur2lg-28410b47-58fd-4a48-9b67-49c0f56c68ce.png/v1/fill/w_1035,h_772,q_70,strp/mit_license_logo_by_excaliburzero_d9ur2lg-pre.jpg"
                ></v-img>
                <v-img
                  contain
                  max-height="50%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Opensource.svg/724px-Opensource.svg.png"
                ></v-img>
              </v-col>
              <v-col class="black-text" cols="12" md="6">
                <Timeline widget-class="mt-3 my-custom-class twitter" id="santimillef" sourceType="profile" :options="{ tweetLimit: '3' }" />
              </v-col>
            </v-row>
          </v-container>
          
        </section>
      </v-content>

      <v-footer class="justify-center" color="#FF5D73" height="50">
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
          &copy; {{ (new Date()).getFullYear() }} — Made with 💜 by Santiago Mille
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'
  export default {
    name: 'HomePage',

    data: () => ({
      text: 'am an engineer',
      hobbiesList: ['Robotics','Genetics','SynBio', 'Circuits', 'ML', 'Deep Learning', 'Web development', 'and more...'],
      colorList: ['H04F06A','H4C6665','HFFA69E','H2DE1FC','HFF7E6B', 'Hffd33c'],
      continue:true,
      color:'#04F06A',
      hobbiesListIter: 0,
      drawer:false
    
    }),
    components:{
      Timeline
    },
    mounted(){
      this.repeatTimeout(0);
    },
    methods:{
      repeatTimeout(prevN) {
        let num = Math.round(Math.random() * 5)
        while(prevN===num){
          num = Math.round(Math.random() * 5)
        }
        
        setTimeout(function(){
          if(this.continue){
            this.text = this.hobbiesList[this.hobbiesListIter]
            this.hobbiesListIter = (this.hobbiesListIter+1)%this.hobbiesList.length
            this.color = this.colorList[num]
            this.repeatTimeout(num)
          }
        }.bind(this),1500);
      }
    }
  }
</script>

<style scoped>
.color{
  background: #FF5D73;
  min-width: 100vw;
  min-height: 130vh;
}
.drawer{
  position:fixed; 
  top:0; 
  left:0; 
  overflow-y:scroll;
}
.H04F06A{
  color: #04F06A;
}
.HFF5D73{
  color: #FF5D73;
}
.v-content{
  padding-top: 10px !important;
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

.background{
  background:#ffffff;/*#dedede*/
}

.padding-top{
  padding-top: 70px;
  padding-bottom: 0;
  margin-bottom: -5rem; 
}

.page-title{
  font-size: 2rem !important;
}

.v-list-item{
  min-height: fit-content !important;
}
.bar-b{
  margin-right: 5px !important;
}

.aboutPro{
  align-content: center;
  text-align: justify !important;
  font-weight: 200;
}

.img{
  max-width: 75%;
  max-height: 400px;
  margin: auto;
  border-radius: 30px;
}

.black-text{
  color: #6a6a6e;
}

.less-margin{
  margin: auto;
}

.margin-about{
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.about{
  text-align: justify;
}

.titlee{
  color: white;
}

@media only screen and (max-width: 800px) {
  .titlee{
    font-size: 2.5vmax;
  }
}

</style>
