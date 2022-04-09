<template>
    <!-- <v-card height="800px">
        <l-map ref="map" :zoom="mapProps.zoom" :center="mapProps.center">
        <l-tile-layer :url="mapProps.url"></l-tile-layer>
        </l-map>
    </v-card> -->
    <v-container id="map"></v-container>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from 'vue2-leaflet'
import L from 'leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  },
  mounted () {
    L.map('map', { center: L.latLng(this.mapProps.center[0], this.mapProps.center[1]), zoom: this.mapProps.zoom }).addLayer(
      L.tileLayer(this.mapProps.url)
    )
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

<style>
#map {
    height: 1000px;
}
</style>
