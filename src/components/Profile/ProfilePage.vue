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

        <v-btn class="bar-b" title="Cloned" href='./myproducts' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-folder-download</v-icon>
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

            <v-card target="_blank" elevation="0.5" max-width="100%">
              <v-row>
                <v-col cols="12">
                  <v-card-title class="text margin_12">
                    <h3 class="left black-text font-weight-bold mb-3">{{user.name.split(' ')[0]+"'s information:"}}</h3>
                  </v-card-title>
                  <v-card-text class="left">
                    <v-row class="margin_0" v-for="element in Object.entries(user)" :key="element[0]">
                      <v-col cols="4">
                        <h3>
                          {{keyToTitle[element[0]]}}
                        </h3>
                      </v-col>
                      <v-col cols="8">
                        <v-row v-if="element[0]=='uploads'||element[0]=='projects'">
                          <v-col v-for="project in element[1]" :key="project.name" cols="3">
                            {{project.name}}
                          </v-col>
                        </v-row>
                        <span v-else>
                          <span v-if="element[0]=='password'">
                            <p v-if="!edit">{{element[1]}}</p>
                            <v-text-field v-else
                              type="password"
                              :id="user[element[0]]"
                              v-model="user[element[0]]"
                              :label="keyToTitle[element[0]]"
                              required
                            ></v-text-field>
                            <v-text-field v-if="edit"
                              type="password"
                              :id="user[element[0]]"
                              v-model="newpass"
                              :label="keyToTitle[element[0]]"
                              required
                            ></v-text-field>
                          </span>
                          <span v-else-if="element[0]=='username'">
                            <p>{{element[1]}}</p>
                          </span>
                          <span v-else>
                            <p v-if="!edit">{{element[1]}}</p>
                            <v-text-field v-else
                              type="text"
                              :id="user[element[0]]"
                              v-model="user[element[0]]"
                              :label="keyToTitle[element[0]]"
                              required
                            ></v-text-field>
                          </span>
                        </span>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                
              </v-row>
              <v-btn v-if="!edit" class='btn' @click="editB()">Edit</v-btn>
              <v-btn v-else class='btn' @click="save()">Save</v-btn>
              <v-btn v-if="edit" class='btn' @click="cancel()">Cancel</v-btn>
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
  import axios from "axios";

  export default {
    name: 'ProfilePage',

    data: () => ({
      edit:false,
      drawer:false,
      newpass:'',
      keyToTitle:{
        name:"Name",
        username:"Username",
        email:'E-mail',
        password:'Password',
        uploads:'Uploads',
        projects:'Projects'
      },
      headers : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
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
              "size":2889
            }]
          },{
            "name":"Sumo Roboot",
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
    methods:{
      logout(){
        console.log('logout')
      },
      editB(){
        this.edit=true;
      },
      save(){
        //console.log(this.user)
        if(this.user['password']!=this.newpass){
          alert("Passwords do not match!")
          return 
        }
        let post = {
          mail: this.user['email'],
          password: this.user['password'],
          name:this.user['name'],
          users:this.user['username']
        };
        
        console.log(post);
        
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/edit-user", post,{
          headers: this.headers
        }).then((result) => {
          console.log(result)
          if(result.status==200 &&result.data.statusCode && result.data.statusCode==200) {
            this.edit=false;
            alert("Your data has been saved!")
          }else{
            alert("There was an error in the update!: "+result.data.body)
          }
        }).catch(error => {
            alert(error)
        });
      },
      cancel(){
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
  margin: 25px;
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
