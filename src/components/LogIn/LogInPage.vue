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
            <h2 class="display-2 black-text font-weight-bold mb-3">Log In</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <span>
              <form id="app" @submit="checkForm" action="/something" method="post">
                <table class="center">                
    
                  <p v-if="errors.length">
                    <b>Please check the following error(s):</b>
                    <ul>
                      <li :key="error" v-for="error in errors">{{ error }}</li>
                    </ul>
                  </p>
                  
                  <tr>
                    <td>
                      <label for="name">Username:</label>
                    </td>
                    <td>
                      <input type="text" name="name" id="name" v-model="name">
                    </td>
                  </tr>  

                  <tr>
                    <td>
                      <label for="password">Password: </label>
                    </td>
                    <td>
                      <input type="password" name="password" id="password" v-model="password" min="0">
                    </td>
                  </tr> 
                    
                </table>

                <input class="button" type="submit" value="Submit"> 
                <br>
                <p>Do not have an account? <a href="./signup">Sign up</a></p>

              </form>
            </span>



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
  export default {
    name: 'LogInPage',
    data: () => ({
      errors:[],
      name:null,
      password:null,
    }),
    methods:{
      checkForm:function(e) {
        if(this.name && this.password) return true;
        this.errors = [];
        if(!this.name) this.errors.push("Name required.");
        if(!this.password) this.errors.push("Password required.");
        e.preventDefault();
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
  margin-left: 15px;
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
