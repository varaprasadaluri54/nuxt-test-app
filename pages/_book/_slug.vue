<template>
  <h1>{{ book }}/{{ slug }}</h1>
</template>

<script>
export default {
  asyncData({ params }) {
    const book = params.book
    const slug = params.slug
    return { book, slug }
  },
}
</script>

<style>
</style>