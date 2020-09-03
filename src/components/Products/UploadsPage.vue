<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        class="drawer"
        temporary>
        <v-list nav dense>
        
          <v-list-item href="./profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
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
        <a href = './dashboard'><v-avatar

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

        <v-btn class="bar-b" title="Profile" href='./profile' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-account</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Uploads" href='./myuploads' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-cloud-upload</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Dashboard" href='./dashboard' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-home</v-icon>
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
            <h2 class="left black-text font-weight-bold mb-3">Your uploaded projects</h2>

            <v-card v-for="project in user.uploads" :key="project.name" target="_blank" elevation="0.5" max-width="100%">
              <v-row>
                <v-col cols="12">
                  <v-card-title class="text margin_12">
                    <h3 class="left black-text font-weight-bold mb-3">{{project.name}}</h3>
                  </v-card-title>
                  <v-card-subtitle class="left magin_12">
                    {{project.description}}
                  </v-card-subtitle>
                  <v-card-text class="left">
                    <v-row class="margin_0">
                      <v-col class="padding0" v-for="doc in project.documents" :key="doc.name" cols="3" sm='6' md='2'>
                        <a class="" :href="doc.url" target="_blank">{{doc.name+' ('+doc.size+') '}}</a>
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
    name: 'UploadsPage',

    data: () => ({
      edit:false,
      drawer:false,
      user:{
        "name":"Rodrigo Cabrera Pliego",
        "username":"rocapl",
        "email":"rodrigo@amazon.com",
        "password":"1234567",
        "uploads":[{
            "name":"Sumo Robot",
            "description":"This a chassis and code for a mini sumo robot.",
            "documents":[{
              "name":"chassis.stl",
              "size":2889,
              "url":'https://www.google.com/'
            }]
          },{
            "name":"Sumo Roboot",
            "description":"This is another chassis and code for a mini sumo robot.",
            "documents":[{
              "name":"chassis.stl",
              "size":1899,
              "url":'https://www.google.com/'
            }]
          }],
        "projects":[{
            "name":"Quadruped Robot",
            "description":"This is the structure, mechanics and code for a quadruped robot built in wood",
            "documents":[{
              "name":"leg.stl",
              "size":2889,
              "url":'https://www.google.com/'
            },
            {
              "name":"chassis.stl",
              "size":28889,
              "url":'https://www.google.com/'
            },
            {
              "name":"code.c",
              "size":289,
              "url":'https://www.google.com/'
            }]
          }]
        },
      }
    ),
    methods:{
      logout(){
        console.log('logout')
      },
      editB(){
        this.edit=true;
      },
      save(){
        alert("Your data has been saved!")
        console.log(this.user)
        this.edit=false;
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

.padding0{
  padding: 0;
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

.btn{
  color: black !important;
  margin-bottom: 25px;
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

.margin_12{
  margin: 12px;
}

@media only screen and (max-width: 800px) {
  .titlee{
    font-size: 2.5vmax;
  }
}

</style>
