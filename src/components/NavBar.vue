<template>
  <nav class="navbar">
    <router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
    <router-link class="navbar-item" :to="{ name: 'away' }">Away</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .router-link-exact-active
    font-weight: bold
</style>
