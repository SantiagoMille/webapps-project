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

          <v-list-item href="./projects">
            <v-list-item-icon>
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
            <h2 class="display-2 black-text font-weight-bold mb-3">RESEARCH</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <v-row class='margin black-text cv' id='cv'>
              <v-col cols="12" sm='6'>
                <h2 class="titlee">Peer-Reviewed Papers</h2>                
              </v-col>
            </v-row>

            <v-row class='margin black-text cv' id='cv'>
              <v-col class="cv-text middle" cols="12" md='8'>   
                <h4 class='paper-title'>Li W, <b style="font-weight:bold">Mille LS</b>, Robledo JA, Uribe T, Huerta V, Zhang YS*.
                <a class="link" href="https://onlinelibrary.wiley.com/doi/abs/10.1002/adhm.202000156" target="_blank">Recent Advances in Formulating and Processing Biomaterial Inks for Vat Polymerization-Based 3D Printing. </a> 
                <b style="font-weight:bold">Advanced Healthcare Materials</b>, 2020, in press.</h4>
              </v-col> 
              <v-col class="cv-text middle" cols="12" md='4'>   
                <v-img class="img" contain src='../../assets/1.jpg'></v-img>
              </v-col> 
              
            </v-row>

            <v-row class='margin black-text cv' id='cv'>
              <v-col class="cv-text middle" cols="12" md='8'>   
                <h4 class='paper-title'>Liu T, Liu Q, Anaya I, Huang D, Kong W, <b style="font-weight:bold">Mille LS</b>, Zhang YS*.
                <a class="link" href="https://www.sciencedirect.com/science/article/pii/S1046202320300475" target="_blank">Investigating Lymphangiogenesis in a Sacrificially Bioprinted Volumetric Model of Breast Tumor Tissue</a>. 
                <b style="font-weight:bold">Methods</b>, 2020, in press.</h4>
              </v-col> 
              <v-col class="cv-text middle" cols="12" md='4'>   
                <v-img class="img" contain src='../../assets/2.png'></v-img>
              </v-col> 
              
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' id='cv'>
              <v-col cols="12" sm='4'>
                <h2 class="titlee">Posters</h2>                
              </v-col>
            </v-row>

            <v-row class='margin black-text cv' id='cv'>
              <v-col class="cv-text middle" cols="12" md='8'>   
                <h4 class='paper-title'><b style="font-weight:bold">Mille LS</b>,
                Vazquez A, Oliva JL*, Garcia B, Vazquez EA.
                <a class="link" href="https://www-optica.inaoep.mx/~tecnologia_salud/2019/trabajos_cartel.php" target="_blank">Kidney-on-a-chip: Microfabrication and physiological microenviroment mimetism</a>. INAOE, Mexico, 2019.</h4>
                <i style="font-weight:bold">Lauded with Honorable Mention</i>
              </v-col> 
              <v-col class="cv-text middle" cols="12" md='4'>   
                <a href="https://storage.googleapis.com/santimille.appspot.com/research/lab.png"><v-img class="poster" lazy-src='../../assets/logo.png' contain src='https://storage.googleapis.com/santimille.appspot.com/research/lab.png'></v-img></a>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' id='cv'>
              <v-col class="cv-text middle" cols="12" md='8'>   
                <h4 class='paper-title'><b style="font-weight:bold">Mille LS</b>,
                Ibarra CU, Fabian DA, Oliva JL*, Garcia B, Vazquez EA.
                <a class="link" href="https://www-optica.inaoep.mx/~tecnologia_salud/2019/trabajos_cartel.php" target="_blank">CytoDisc: Manufacturing of centrifugated microfluidics devices for cytotoxicity assays</a>. INAOE, Mexico, 2019.</h4>
              </v-col>
              <v-col class="cv-text middle" cols="12" md='4'>   
                <a href="https://storage.googleapis.com/santimille.appspot.com/research/cyto.png"><v-img class="poster" lazy-src='../../assets/logo.png' contain src='https://storage.googleapis.com/santimille.appspot.com/research/cyto.png'></v-img></a>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' id='cv'>
              <v-col class="cv-text middle" cols="12">   
                <h4 class='paper-title'><a class="link" href="http://2018.igem.org/Team:TecCEM" target="_blank">iGEM Competition 2018</a></h4>
              </v-col> 
              <v-col class="cv-text middle" cols="12" >   
                <a href="https://storage.googleapis.com/santimille.appspot.com/research/igem.png"><v-img class="poster-igem" contain lazy-src='../../assets/logo.png' src='https://storage.googleapis.com/santimille.appspot.com/research/igem.png'></v-img></a>
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
  export default {
    name: 'ResearchPage',

    data: () => ({
      
      drawer:false
    
    }),
    methods:{
      
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
  max-width: 100%;
  max-height: 350px;
  margin: auto;
}

.poster-igem{
  max-width: 100%;
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
