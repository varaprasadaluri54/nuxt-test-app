<template>
  <div class="">
    <h1>test</h1>
    <p v-if="rendering === 'server'">
      First load or hard refresh is done on server side.
    </p>
    <p v-if="rendering === 'client'">Navigation is done on client side.</p>
    <NuxtLink to="/">Home Page</NuxtLink>
    <button v-tooltip="'You have ' + count + ' new messages.'">test</button>
  </div>
</template>

<script>
export default {
  middleware: 'test',
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client',
    }
  },
  // mounted() {
  // this.$nextTick(() => {
  //   this.$nuxt.$loading.start()
  //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
  // })
  // window.onNuxtReady(() => {
  //   console.log('hi')
  // })
  // },
}
</script>

<style>
</style>