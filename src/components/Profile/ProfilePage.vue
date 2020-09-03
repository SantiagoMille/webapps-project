<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        class="drawer"
        temporary>
        <v-list nav dense>
        
          <v-list-item href="./myproducts">
            <v-list-item-icon>
              <v-icon>mdi-folder-download</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My products</v-list-item-title>
          </v-list-item>

          <v-list-item href="./myuploads">
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My uploads</v-list-item-title>
          </v-list-item>

          <v-list-item href="./dashboard">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item href="./">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log out</v-list-item-title>
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

        <v-btn class="bar-b" title="Cloned" href='./myproducts' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-folder-download</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Uploads" href='./myuploads' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-cloud-upload</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Profile" href='./profile' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-account</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Log out" @click="logout()" href='./' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-logout</v-icon>
        </v-btn>
        <v-btn class="bar-b" v-if="$vuetify.breakpoint.smOnly||$vuetify.breakpoint.xsOnly" icon style="color:white" @click="drawer = !drawer">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>

      </v-app-bar>

      <v-content>

        <section class='background' id="about-me">

          <v-container class=" container text-center less-margin">

            <v-card target="_blank" elevation="0.5" max-width="100%">
              <v-row>
                <v-col cols="12">
                  <v-card-title class="text">
                    <p class="left black-text font-weight-bold mb-3">{{user.name.split(' ')[0]+"'s information:"}}</p>
                  </v-card-title>
                  <v-card-text class="left">
                    <v-row class="margin_0" v-for="element in Object.entries(user)" :key="element[0]">
                      <v-col cols="4">
                        <h3>
                        {{element[0]}}
                        </h3>
                      </v-col>
                      <v-col cols="8">
                        {{element[1]}}
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                
              </v-row>
            </v-card>

          </v-container>
          
        </section>
      </v-content>

      
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'ProfilePage',

    data: () => ({
      text: 'am an engineer',
      hobbiesList: ['Robotics','Genetics','SynBio', 'Circuits', 'ML', 'Deep Learning', 'Web development', 'and more...'],
      colorList: ['H04F06A','H4C6665','HFFA69E','H2DE1FC','HFF7E6B', 'Hffd33c'],
      continue:true,
      color:'#04F06A',
      hobbiesListIter: 0,
      drawer:false,
      user:{
        "name":"Rodrigo Cabrera Pliego",
        "username":"rocapl",
        "email":"rodrigo@amazon.com",
        "uploads":[{
            "name":"Sumo Robot",
            "description":"This a chassis and code for a mini sumo robot.",
            "documents":[{
              "name":"chassis.stl",
              "size":2889
            }]
          }],
        "projects":[{
            "name":"Quadruped Robot",
            "description":"This is the structure, mechanics and code for a quadruped robot built in wood",
            "documents":[{
              "name":"leg.stl",
              "size":2889
            },
            {
              "name":"chassis.stl",
              "size":28889
            },
            {
              "name":"code.c",
              "size":289
            }]
          }]
        },
      }
    ),
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
      },
      logout(){
        console.log('logout')
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
.background{
  background:#ffffff
}

.left{
  text-align: start;
  padding-top: 10px;
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

.container{
  min-height: 100%;
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

.titlee{
  color: white;
}

.margin_0{
  margin: 0;
}

@media only screen and (max-width: 800px) {
  .titlee{
    font-size: 2.5vmax;
  }
}

</style>
