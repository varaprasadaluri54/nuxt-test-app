<template>
  <div class="about">
    <h1>About Page</h1>
    <button v-tooltip="'new messages'">tooltip</button>
    {{ $store.state.counter }}
    <button @click="inc()">increment</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'about',
          content: 'about website',
        },
      ],
    }
  },

  methods: {
    inc() {
      this.$store.commit('increment')
    },
  },
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>