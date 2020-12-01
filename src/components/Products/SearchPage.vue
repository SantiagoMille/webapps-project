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

        <v-btn class="bar-b" title="Products" href='./myproducts' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-folder-download</v-icon>
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
            <h2 class="left black-text font-weight-bold mb-3">Find new proyects:</h2>

            <v-row>
              <v-col cols="10" md="11" >
                <v-text-field v-model="value">
                  <v-icon
                    slot="prepend"
                    color="gray"
                  >
                    mdi-magnify
                  </v-icon>
                </v-text-field>
              </v-col>
              <v-col cols="2" md="1">
                <v-btn v-on:click="search()" depressed color="#96CDFF">
                  <div class="button">Search</div>
                </v-btn>
              </v-col>
            </v-row>

            <span v-for="project in products" :key="project.name">
              <v-card  target="_blank" elevation="0.5" max-width="100%">
                <v-row>
                  <v-col cols="12" md='7'>
                    <v-card-title class="text margin_12 no-padding">
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
                  <v-col cols="11" md='4'>
                    <v-img class='img' contain max-height="225px" :src="project.img"/>
                  </v-col>
                  <v-col v-if="project.user!=user.username" cols="1">
                    <v-btn class="bar-b" icon style="color:white" v-on:click="download(project)">
                      <v-icon color="#cccccc" large>mdi-download</v-icon>
                    </v-btn>
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
  import router from '../../router'
  import axios from "axios";
  export default {
    name: 'SearchPage',

    data: () => ({
      edit:false,
      values: ['foo', 'bar'],
      value: null,
      drawer:false,
      headers : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      user:{
        "fullName":"Rodrigo Cabrera Pliego",
        "username":"rocapl",
        },
      products:[{
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
            "documents":[{"name":"chassis.stl","size":1899,"url":'https://www.google.com/'}]
          }]
      }
    ),
    mounted () {
      
      this.user = this.$store.getters.getUser.user
      
      if(this.user==null){
        router.push('/');
      }
      //console.log(this.user)

      let post = {
        cadena: '',
        max:4,
        token:this.user.token
      };
      let _this = this;
      
      axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/get-products", post,{
        headers: this.headers
      }).then((result) => {
        console.log(result)
        if(result.status==200&&result.data.logout){
          this.$store.commit("setUser", {});
          router.push('/');
        }
        else if(result.status==200 &&result.data.productos) {
          //console.log(result.data.productos)
          _this.products=result.data.productos;
        }
        else{
          alert('Please check your connection!')
        }
      }).catch(error => {
          console.log('error',error)
      });

      
    },
    methods:{
      download(p){
        
        let post = {
          id:p.id,
          user:p.user,
          token:this.user.token
        };
        console.log(post)
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/addtransaction", post,{
          headers: this.headers
        }).then((result) => {
          console.log(result)
          if(result.status==200 &&result.data.status&&result.data.status==200) {
            alert('Product added to your account')
          }
          else{
            alert('Please check your connection!')
          }
        }).catch(error => {
            console.log('error',error)
        });
      },
      search(){
        let post = {
          cadena: this.value,
          max:100,
          token:this.user.token
        };
        let _this = this;
        
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/get-products", post,{
          headers: this.headers
        }).then((result) => {
          if(result.status==200&&result.data.logout){
            this.$store.commit("setUser", {});
            router.push('/');
          }
          else if(result.status==200 &&result.data.productos) {
            console.log(result.data.productos)
            _this.products=result.data.productos;
          }
          else{
            alert('Please check your connection!')
          }
        }).catch(error => {
            console.log('error',error)
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

.button{
  color: #ffffff;
  font-weight: bold;
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

.no-padding{
  padding: 0;
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

.link{
  text-decoration-line: none;
  color: #96CDFF;
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

.img{
  margin: 10px;
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
