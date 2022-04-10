<template>
    <v-list dense>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'ここのお店おいしかった' },
      { text: 'まずまずの味' },
      { text: '店主がいい人だった' }
    ]
  })
}
</script>
