<template>
  <v-simple-table dense>
    <template v-slot:default>
      <tbody>
        <tr
          v-for="item in shopItems"
          :key="item.name"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.text }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: () => ({
    shopItems: [
      { title: '場所', text: '仙台' },
      { title: '評価', text: '☆☆☆☆☆' },
      { title: 'HP', text: 'https://' }
    ]
  })
}
</script>
