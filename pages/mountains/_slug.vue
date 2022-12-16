<template>
  <div>
    <h1>{{ slug }}</h1>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/mountains">Back to Mountains</NuxtLink>
  </div>
</template>
<script>
export default {
  layout: 'mountains',
  asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
}
</script>