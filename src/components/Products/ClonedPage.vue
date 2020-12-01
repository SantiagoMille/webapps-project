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
        <v-btn class="bar-b" title="Uploads" href='./myuploads' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-cloud-upload</v-icon>
        </v-btn>
        <v-btn class="bar-b" title="Dashboard" href='./dashboard' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-home</v-icon>
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
            <h1 class="left black-text font-weight-bold mb-3">Your cloned projects</h1>

            <span v-for="project in user.projects" :key="project.name">
              <v-card  target="_blank" elevation="0.5" max-width="100%">
                <v-row>
                  <v-col cols="12" md="7">
                    <v-card-title class="text margin_12 no-padding">
                      <h5 class="left black-text font-weight-bold mb-3">{{project.name}} ({{project.stock}})</h5>
                    </v-card-title>
                    <v-card-subtitle class="left magin_12">
                      {{project.description}}
                    </v-card-subtitle>
                    <v-card-text class="left">
                      <v-row class="margin_0">
                        <v-col class="padding0" v-for="doc in project.documents" :key="doc.name" cols="6" sm='6' md='4'>
                          <a class="link" :href="doc.url" target="_blank">{{doc.name+' ('+doc.size+') '}}</a>
                        </v-col>

                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md='4'>
                    <v-img class='img' contain max-height="225px" :src="project.img"/>
                  </v-col>
                </v-row>
              </v-card>
              <br>
            </span>

          </v-container>
          
        </section>
      </v-content>

      
    </v-app>
  </div>
</template>

<script>
  import axios from "axios";
  import router from '../../router'

  export default {
    name: 'UploadsPage',

    data: () => ({
      edit:false,
      drawer:false,
      userr:null,
      user:{
        "name":"Rodrigo Cabrera Pliego",
        "username":"rocapl",
        "email":"rodrigo@amazon.com",
        "password":"1234567",
        "uploads":null,
        "projects":null
        },
      }
    ),
    mounted () {
      let count=0
      while(!this.userr&&count<5){
        this.userr = this.$store.getters.getUser
        count++
      }
      //console.log(this.userr)
      if(this.userr==null||!this.userr||!this.userr.user){
        router.push('/');
      }else{
        this.user.name = this.userr.user.fullName
        this.user.username = this.userr.user.username
        this.getProjects();
      }
    },
    methods:{
      getProjects(){
        let post = {
          user: this.user.username,
          maxx:10,
          token:this.userr.user.token
        };
        let _this = this;
        
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/getuserprojects", post,{
          headers: this.headers
        }).then((result) => {
          if(result.status==200&&result.data.logout){
            this.$store.commit("setUser", {});
            router.push('/');
          }
          else if(result.status==200&&result.data.productos&&result.data.productos.length>0) {
            _this.user.projects=[]
            result.data.productos.forEach(element => {
              let arr = element.documentos.split(';')
              let arr2=[]
              arr.forEach(e=>{
                let x = e.split(',');
                arr2.push({"name":x[0],"size":x[1]})
              })
              //console.log(element)
              arr2.pop()
              if(element.cloned){
                _this.user.projects.push({'name':element.name,'description':element.description,'documents':arr2,'stock':element.stock,'img':element.img})
              }
            });
            console.log(this.user)            
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

.padding0{
  padding: 0;
}

.left{
  text-align: start;
  padding-top: 10px;
}

.no-padding{
  padding: 0;
}

.link{
  text-decoration-line: none;
  color: #96CDFF;
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

.img{
  margin: 10px;
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
