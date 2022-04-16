<template>
  <v-main class="pt-0">
    <v-row>
      <v-col cols="12" md="9">
        <snack-map></snack-map>
      </v-col>
      <v-col cols="12" md="3">
        <user-comment-list class="top-area"></user-comment-list>
        <shop-detail class="bottom-area"></shop-detail>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import SnackMap from '@/components/organisms/Map'
import UserCommentList from '@/components/molecules/UserCommentList'
import ShopDetail from '@/components/molecules/ShopDetail'

export default {
  components: {
    SnackMap,
    UserCommentList,
    ShopDetail
  }
}
</script>

<style>
.right-menu {
  display: grid;
  height: 100vh;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
}

.top-area {
  grid-row: 1;
  grid-column: 1;
}

.bottom-area {
  grid-row: 2;
  grid-column: 1;
}

</style>
