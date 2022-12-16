<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test">Test page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user">user page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/1">user:1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/hjgf" no-prefetch>Error page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/mountains">Mountains</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/my-first-blog-post">Editable blog</NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
      <div v-if="$nuxt.isOnline">You are Online</div>
      <div v-if="$nuxt.isOffline">You are Offline</div>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  flex: 1 1 100px;
}
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
}
a.nuxt-link-prefetched {
  color: orangeRed;
}
</style>