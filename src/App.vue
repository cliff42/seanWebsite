<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="light" variant="light">
        <img src="./assets/mainLogoCut.png" id="logo">
        <b-nav-item active-class="active" class="nav-link" v-for="route in links" 
                    :key="route.path" :to="route.path" >
          {{ route.name }} 
        </b-nav-item>
        <!-- <router-link to="/">Deploy</router-link> | 
        <router-link to="/bots">Bots</router-link> |
        <router-link to="/comments">Comments</router-link> -->
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'App',
  setup() {
    const links = ref([]);
    
    links.value = [
      {
        name: 'Artwork',
        path: '/artwork'
      },
      {
        name: 'Films',
        path: '/films'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ];

    return {
      links
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FF5700;
}

#logo {
  width: 5%;
}
</style>
