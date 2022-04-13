<template>
    <v-list dense>
    <v-list-item
        v-for="(item, i) in items"
        :key="i"
    >
        <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'ここのお店おいしかった' },
      { text: 'まずまずの味' },
      { text: '店主がいい人だった' }
    ]
  })
}
</script>
