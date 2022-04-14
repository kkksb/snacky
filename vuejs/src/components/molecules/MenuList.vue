<template>
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'オススメのお店' }
      ],
      right: null
    }
  }
}
</script>
