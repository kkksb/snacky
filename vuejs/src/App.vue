<template>
  <v-app>
    <side-menu></side-menu>
    <snacky-header></snacky-header>

    <router-view></router-view>

    <v-footer app>
      Snacky
    </v-footer>
  </v-app>
</template>

<script>
import SideMenu from '@/components/organisms/SideMenu'
import SnackyHeader from '@/components/organisms/Header'

export default {
  name: 'App',
  components: {
    SideMenu,
    SnackyHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  margin: 10px 10px 40px 10px
}
</style>
