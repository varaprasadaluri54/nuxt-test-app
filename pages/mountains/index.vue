<template>
  <div>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink :to="`/mountains/${mountain.slug}`">{{
          mountain.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
    
    <script>
export default {
  layout: 'mountains',
  async asyncData({ $axios }) {
    const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
    return { mountains }
  },
  transitions: 'mountains',
}
</script>
<style scoped>
.mountains-enter-active {
  transition: all 0.3s ease-out;
}
.mountains-leave-active {
  transition: all 0.8s cubic-bezier(1, 05, 08, 1);
}
.mountains-enter-form,
.mountains-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
    
    <style>
</style>