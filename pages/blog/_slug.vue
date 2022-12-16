<template>
  <div>
    <NuxtContent :document="article" />
    <!-- <prev-next :prev="prev" :next="next" /> -->
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    // const [prev, next] = await $content('articles')
    //   .only(['title'])
    //   // .sortBy('createdAt', 'asc')
    //   .surround(params.slug)
    //   .fetch()

    return {
      article,
      // prev,
      // next,
    }
  },
}
</script>

<style>
</style>