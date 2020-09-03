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
            <h2 class="display-2 black-text font-weight-bold mb-3">Reset Password</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <span>
              <v-form v-model="valid" id="app">
                <table class="center">                
                  
                  <tr>
                    <td>
                      <v-text-field
                        type="email"
                        id="email"
                        :rules="emailRules"
                        v-model="email"
                        label="Email"
                        required                   
                      ></v-text-field>
                    </td>
                  </tr>  
                    
                </table>

                <v-btn class='btn' :disabled="!valid" name="button" @click="checkForm()">Submit</v-btn>
                <!--<v-btn :disabled="!valid" class='btn' name="button" @click="checkForm()">Submit</v-btn>-->
                <br>
                <p>Do not have an account? <a href="./signup">Sign up</a></p>
                <p>Did you suddenly remember? <a href="./login">Log in</a></p>

              </v-form>
            </span>

            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="390">
                  <v-card>
                    <v-card-title class="headline">Oops!</v-card-title>
                    <v-card-text>
                      Looks like this email is no registered under any account. Doble check!
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn v-if="numWrongLog<5" color="green darken-1" text @click="dialog = false">OK</v-btn>
                      <v-btn v-else color="green darken-1" text @click="ok(false)">OK</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>

            <template>
              <v-row justify="center">
                <v-dialog v-model="dialogGood" persistent max-width="390">
                  <v-card>
                    <v-card-title class="headline">An email has been sent to you.</v-card-title>
                    <v-card-text>
                      Check your email and follow the steps there.
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="ok(true)">OK</v-btn>
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
    
    name: 'ResetPasswordPage',
    data: () => ({
      errors:[],
      dialog:false,
      dialogGood:false,
      email:null,
      valid:false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods:{
      checkForm:function() {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
          console.log(result.data);
        })
        if(this.email) {
          this.dialogGood=true;
        }else{
          this.dialog=true;
          this.errors = [];
          this.numWrongLog+=1;
          if(!this.name) this.errors.push("Name required.");
          if(!this.password) this.errors.push("Password required.");
        }
      },
      ok(good){
        if(good) router.push('/');
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

.black-text{
  color: #6a6a6e;
}

select,label {
  margin-left: 0px;
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
  margin: -1px;
  color: black;
}

td{
  text-align: start;
}


@media only screen and (max-width: 800px) {
  .titlee{
    font-size: 2.1vmax;
  }
}

</style>