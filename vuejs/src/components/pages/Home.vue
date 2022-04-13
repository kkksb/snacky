<template>
  <v-row>
    <v-col cols="12" md="9">
      <snack-map></snack-map>
    </v-col>
    <v-col cols="12" md="3" class="right-menu">
      <user-comment-list></user-comment-list>
      <shop-detail></shop-detail>
    </v-col>
  </v-row>
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
</style>
