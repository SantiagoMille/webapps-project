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

          <v-list-item href="./profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My profile</v-list-item-title>
          </v-list-item>

          <v-list-item href="./search">
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Search</v-list-item-title>
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
        
        <v-btn class="bar-b" title="Log out" href='./search' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-magnify</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Cloned" href='./myproducts' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-folder-download</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Uploads" href='./myuploads' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-cloud-upload</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Profile" href='./profile' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-account</v-icon>
        </v-btn>
        <v-btn class="bar-b" v-if="$vuetify.breakpoint.smOnly||$vuetify.breakpoint.xsOnly" icon style="color:white" @click="drawer = !drawer">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>

      </v-app-bar>

      <v-content>

        <section class='background' id="about-me">

          <v-container class=" container text-center less-margin">
            <h2 class="left black-text font-weight-bold mb-3">Hello, {{userdata.name.split(' ')[0]}}</h2>

            <v-card target="_blank" elevation="0.5" max-width="100%">
              <v-row>
                <v-col cols="12">
                  <v-card-title class="text">
                    <p class="left black-text font-weight-bold mb-3">Your newest cloned projects:</p>
                  </v-card-title>
                  <v-card-text class="center">
                    <v-row class='margin-about' :key="'proj'+key" v-for="(project,key) in userdata.projects.slice(userdata.projects.length-2,userdata.projects.length)">
                      <v-col class="black-text left" cols="10" >
                        <h3>{{project.name}}</h3>
                      </v-col>
                      <v-col class="black-text left" cols="2" >
                        <h4>Downloads: {{project.stock}}</h4>
                      </v-col>
                      <v-col class="black-text left" cols="12" >
                        {{project.description}}
                      </v-col>
                      <v-col class="padding0 left" v-for="doc in project.documents" :key="doc.name" cols="3" sm='6' md='2'>
                        <a class="left link" :href="'https://www.google.com'" target="_blank">{{doc.name+' ('+doc.size+') '}}</a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>

            <br/>

            <v-card target="_blank" elevation="0.5" max-width="100%">
              <v-row>
                <v-col cols="12">
                  <v-card-title class="text">
                    <p class="left black-text font-weight-bold mb-3">Your newest upload projects:</p>
                  </v-card-title>
                  <v-card-text class="center">
                    <v-row class='margin-about' :key="'proj'+key" v-for="(project,key) in userdata.uploads.slice(userdata.uploads.length-2,userdata.uploads.length)">
                      <v-col class="black-text left" cols="10" >
                        <h3>{{project.name}}</h3>
                      </v-col>
                      <v-col class="black-text left" cols="2" >
                        <h4>Downloads: {{project.stock}}</h4>
                      </v-col>
                      <v-col class="black-text left" cols="12" >
                        {{project.description}}
                      </v-col>
                      <v-col class="padding0 left" v-for="doc in project.documents" :key="doc.name" cols="3" sm='6' md='2'>
                        <a class="left link" :href="'https://www.google.com'" target="_blank">{{doc.name+' ('+doc.size+') '}}</a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>

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
  import router from '../../router'
  import axios from "axios";
  export default {
    name: 'MainPage',

    data: () => ({
    
      drawer:false,
      user:null,
      new:true,
      userdata:{
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
    mounted () {
      let count=0
      while(!this.user&&count<5){
        this.user = this.$store.getters.getUser
        count++
      }
      if(this.user==null||!this.user||!this.user.user){
        router.push('/');
      }else{
        this.userdata.name = this.user.user.fullName
        this.userdata.username = this.user.user.username
        if(this.new){
          this.$store.commit("setUserState", this.user.user);
          this.new=false;
          this.getProjects();
        }
      }
    },
    methods:{
      getProjects(){
        //console.log(this.user.user.token)
        let post = {
          //user: this.user.user.username,
          maxx:5,
          token: this.user.user.token
        };
        let _this = this;
        //console.log(post)
        
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/getuserprojects", post,{
          headers: this.headers
        }).then((result) => {
          if(result.status==200&&result.data.logout){
            this.$store.commit("setUser", {});
            router.push('/');
          }
          else if(result.status==200&&result.data.productos&&result.data.productos.length>0) {
            _this.userdata.projects=[]
            _this.userdata.uploads=[]
            
            result.data.productos.forEach(element => {
              let arr = element.documentos.split(';')
              
              let arr2=[]
              arr.forEach(e=>{
                let x = e.split(',');
                arr2.push({"name":x[0],"size":x[1]})
              })
              arr2.pop()
              //console.log(element)
              if(element.cloned){
                _this.userdata.projects.push({'name':element.name,'description':element.description,'documents':arr2,'stock':element.stock})
              }else{
                _this.userdata.uploads.push({'name':element.name,'description':element.description,'documents':arr2,'stock':element.stock})
              }
            });
            //console.log(this.userdata)            
          }else{
            alert("No items for this user!")
          }
        }).catch(error => {
            console.log(error)
            alert(error);
        });
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

.link{
  text-decoration-line: none;
  color: #96CDFF;
}

.margin-about{
  margin-top: 1rem;
  margin-bottom: 1rem;
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
