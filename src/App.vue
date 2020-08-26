<template>
  <v-app>
    <!-- <navigation></navigation> -->
    
      <router-view></router-view>
    
<!--     <footer-bar></footer-bar>-->
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Verdana, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: lighter;
  text-align: center;
  color: #ffffff;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #FF5D73;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF5D73;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FF5D73;
}
</style>
