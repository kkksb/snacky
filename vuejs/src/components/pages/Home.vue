<template>
  <v-main>
    <v-row>
        <side-menu></side-menu>
        <v-card width="1500px">
          <l-map ref="map" :zoom="mapProps.zoom" :center="mapProps.center">
            <l-tile-layer :url="mapProps.url"></l-tile-layer>
          </l-map>
        </v-card>
    </v-row>
 </v-main>
</template>

<script>
import SideMenu from '@/components/organisms/SideMenu'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  components: {
    SideMenu,
    LMap,
    LTileLayer
  },
  data () {
    return {
      mapProps: {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        zoom: 8,
        center: [34, 137]
      }
    }
  }
}
</script>
