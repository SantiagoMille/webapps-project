<template>
  <div id="app">
    <v-app>

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

      </v-app-bar>

      <v-content>
        
        <section style="background:#ffffff" id="about-me">
          <div class="py-4"></div>

          <v-container  class="text-center less-margin">
            <h2 class="display-2 black-text font-weight-bold mb-3">New Upload</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col md='9' sm='8' cols="12">
                <v-text-field v-model="newItem.title" label="Name"></v-text-field>
              </v-col>
              <v-col cols="6" sm="4" md="3" lg="2">
                <v-switch v-model="newItem.filesB" label="Files"></v-switch>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="newItem.description" auto-grow rows="1" label="Description"></v-textarea>
              </v-col>
              <v-col v-if="newItem.filesB" cols="12">
                <v-file-input multiple v-model="newItem.files" label="Files:"></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-btn color="white" elevation="1" @click="create">Add</v-btn>
              </v-col>
            </v-row>

            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="290">
                  <v-card>
                    <v-card-title class="headline">Please check the following error(s):</v-card-title>
                    <v-card-text>
                      <ul>
                        <li :key="error" v-for="error in errors">{{ error }}</li>
                      </ul>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="ok()">OK</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>

            <template>
              <v-row justify="center" width="100px">
                <v-dialog v-model="dialogGood" persistent max-width="390">
                  <v-card>
                    <v-card-title class="headline">Projects uploaded!</v-card-title>
                    <v-card-text>
                      You have successfully uploaded a project to the platform! 
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="ok()">OK</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-container>

          <div class="py-12"></div>
        </section>

      </v-content>

      <v-footer
        class="justify-center"
        color="#FF5D73"
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
  import router from "../../router/index";
  import axios from "axios";

  export default {
    name: 'NewProjectPage',
    data: () => ({
      errors:[],

      newItem:{title:null,files:null,filesB:null,description:null},
      user:null,
      dialog:false,
      dialogGood:false,

      headers : {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }),
    mounted () {
      let count=0
      while(!this.user&&count<5){
        this.user = this.$store.getters.getUser
        count++
      }
      if(this.user==null||!this.user||!this.user.user){
        router.push('/');
      }
    },
    methods:{
      create(){
        let updatedItem = {};
        Object.assign(updatedItem, this.newItem);
        updatedItem.stock = 1;
        updatedItem.files=[];
        this.newItem.files.forEach((v, i) => {
          updatedItem.files.push({"name":i+'_'+v.name,"size":v.size});
        });
        let post = {
          project: updatedItem,
          user:this.user.user
        };
        let _this = this;
        
        axios.post("https://45gckbtf03.execute-api.us-east-1.amazonaws.com/default/newelement", post,{
            headers: this.headers
          }).then((result) => {
            console.log(result)
            if(result.status==200 &&result.data.statusCode && result.data.statusCode==200) {
              _this.dialogGood=true;
            }else{
              _this.dialog=true;
              _this.errors = [];
              _this.errors.push("Please check you information or try again later");
              _this.errors.push(result.data.body);
            }
          }).catch(error => {
              console.log(error)
              _this.dialog=true;
              _this.errors = [];
              _this.errors.push(error);
        });
      },
      ok(){
        this.dialog=false;
        this.dialogGood=false;
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
.titlee{
  color: white;
}
.center{
  margin: auto;
  align-items: center;
  text-align: center;
}

.img{
  max-width: 75%;
  max-height: 450px;
  margin: auto;
}

.btn{
  color: black !important;
  margin-bottom: 25px;
}

.headline{
  font-size: 1.3rem !important;
}

.button{
  background-color: #eeeeee;
  border: none;
  border-radius: 10px;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1vmax;
}

.black-text{
  color: #6a6a6e;
}

select,label {
  color: black !important;
  font-size: 1.5vmax;
}

input, select{
  background: #eeeeee;
  margin: 5px;
  color: black;
}

a, p{
  font-size: 12px;
  margin-top: -5px;
  color: black;
}

td{
  text-align: end;
}


@media only screen and (max-width: 800px) {
  .titlee{
    font-size: 2.5vmax;
  }
}

</style>
