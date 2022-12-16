<template>
  <p>{{ $route.params.id }}</p>
</template>
  
  <script>
export default {
  validate({ params, query, store }) {
    // console.log(params)
    if (['1', '2'].includes(params.id)) {
      return true
    } else return false
  },
}
</script>
  
  <style>
</style>