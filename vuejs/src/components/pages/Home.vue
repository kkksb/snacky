<template>
  <v-row>
    <v-col cols="12" md="9">
      <snack-map></snack-map>
    </v-col>
    <v-col cols="12" md="3">
      <snacky-list></snacky-list>
    </v-col>
  </v-row>
</template>

<script>
import SnackMap from '@/components/organisms/Map'
import SnackyList from '@/components/organisms/SnackyList'

export default {
  components: {
    SnackMap,
    SnackyList
  }
}
</script>
