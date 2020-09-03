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
            <h2 class="display-2 black-text font-weight-bold mb-3">Sign Up</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <span>
              <v-form v-model="valid" id="app">
                <table class="center">                
    
                  <p v-if="errors.length">
                    <b>Please check the following error(s):</b>
                    <ul>
                      <li :key="error" v-for="error in errors">{{ error }}</li>
                    </ul>
                  </p>

                  <tr>
                    <td>
                      <v-text-field
                        type="text"
                        id="name"
                        :rules="nameRules"
                        v-model="name"
                        label="Full name"
                        required                   
                      ></v-text-field>
                    </td>
                  </tr> 

                  <tr>
                    <td>
                      <v-text-field
                        type="text"
                        id="username"
                        :rules="usernameRules"
                        v-model="username"
                        label="Username"
                        required                   
                      ></v-text-field>
                    </td>
                  </tr> 

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

                  <v-select
                    v-model="sex"
                    :items="sexs"
                    :rules="[v => !!v || 'Item is required']"
                    label="Sex"
                    required
                  ></v-select>

                  <tr>
                    <td>
                      <v-text-field
                        type="password"
                        id="password"
                        v-model="password"
                        label="Password"
                        required 
                        :rules="rulesPass"                  
                      ></v-text-field>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <v-text-field
                        type="password"
                        id="conformPas"
                        v-model="conformPas"
                        label="Confirm Password"
                        required 
                        :rules="rulesPass"                  
                      ></v-text-field>
                    </td>
                  </tr>

                </table>

                <v-btn :disabled="!valid" class='btn' name="button" @click="checkForm()">Submit</v-btn> 
                <br>
                <p>Already have an account? <a href="./login">Log in</a></p> 

              </v-form>
            </span>

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
                      <v-btn color="green darken-1" text @click="ok(true)">OK</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>

            <template>
              <v-row justify="center">
                <v-dialog v-model="dialogGood" persistent max-width="390">
                  <v-card>
                    <v-card-title class="headline">You have succesfully signed up!</v-card-title>
                    <v-card-text>
                      Check your email and let's get started!
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="ok(false)">OK</v-btn>
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
    name: 'SignUpPage',
    data: () => ({
      errors:[],
      name:null,
      username:null,
      conformPas:null,
      password:null,
      sex:null,
      dialog:false,
      dialogGood:false,
      valid:false,
      email:null,
      rulesPass: [
        value => !!value || 'Required.',
        value => (value && value.length >= 7) || 'Min 7 characters',
        value => (value && /\d/.test(value)) || 'You need at least a number'
      ],
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 7) || 'Min 7 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => /[a-zA-Z]+[ ][a-zA-Z ]+/.test(v) || 'Name must be valid',
      ],
      usernameRules: [
        v => !!v || 'Name is required',
        v => /[a-zA-Z0-9\-./]+/.test(v) || 'Name must be valid',
      ],
      sexs: [
        'Man',
        'Woman',
        'Other',
        'Prefer not to specify',
      ],
    }),
    methods:{
      checkForm:function() {
        if(this.conformPas!=this.password){
          this.dialog=true;
          this.errors = [];
          this.errors.push("Your passwords do not match!");
          return 
        }else{
          let post = {
            mail: this.email,
            password: this.password,
            nombre:this.name,
            trato:"NA",
            apPaterno:"NA",
            apMaterno:"NA",
            telefono:"NA",
          };
          let _this = this;
          
          axios.post("https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/creacuenta", post,{
            headers: this.headers
          }).then((result) => {
            if(result.data.result=='success') {
              _this.dialogGood=true;
            }else{
              _this.dialog=true;
              _this.errors = [];
              _this.errors.push("Please check you information or try again later");
              _this.errors.push(result.data);
            }
          }).catch(error => {
              console.log(error)
              _this.dialog=true;
              _this.errors = [];
              _this.errors.push(error);
          });
        }
      },
      ok(bad){
        if(bad) this.dialog=false;
        if(!bad) router.push('dashboard');
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
