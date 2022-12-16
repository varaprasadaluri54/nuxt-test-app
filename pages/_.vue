<template>
  <div>
    <p>404 page not fount</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Error',
      meta: [
        {
          hid: 'Error',
          name: 'error page',
          content: 'error',
        },
      ],
    }
  },
}
</script>

<style>
</style>