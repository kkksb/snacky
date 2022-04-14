<template>
  <v-navigation-drawer clipped app>
    <v-row>
      <v-col class="nav-grid-area">
        <menu-list></menu-list>
        <setting-in-menu></setting-in-menu>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import MenuList from '@/components/molecules/MenuList.vue'
import SettingInMenu from '@/components/molecules/SettingInMenu.vue'

export default {
  components: {
    MenuList,
    SettingInMenu
  }
}
</script>

<style>
.nav-grid-area {
  display: grid;
  height: 100vh;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
}
</style>
