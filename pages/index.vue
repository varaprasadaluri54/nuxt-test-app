<template>
  <div>
    <img src="~/assets/NuxtJS_Logo.png" />
    <p v-if="rendering === 'server'">
      First load or hard refresh is done on server side.
    </p>
    <p v-if="rendering === 'client'">Navigation is done on client side.</p>
    <NuxtLink to="/test">Test Page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData() {
    // console.log($hello('comment'))
    return {
      rendering: process.server ? 'server' : 'client',
    }
  },
  head: {
    title: 'Hello World',
    meta: [
      {
        hid: 'hello world',
        name: 'hello world page',
        content: 'hello world message',
      },
    ],
  },

  // watchQuery(newQuery, oldQuery) {
  //   // Only execute component methods if the old query string contained `bar`
  //   // and the new query string contains `foo`
  //   console.log(newQuery, oldQuery)
  // },
}
</script>
