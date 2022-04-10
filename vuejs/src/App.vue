<template>
  <v-app>
    <snacky-header></snacky-header>
    <side-menu></side-menu>

    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <v-main class="pt-0" fixed>

      <!-- アプリケーションに適切なgutterを提供 -->
      <v-container fluid>

        <!-- vue-routerを使用する場合 -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
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
</style>
