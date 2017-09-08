<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  @import "~buefy/lib/buefy.css"
  @import "~bulma/css/bulma.css"
  #app
    font-family: Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    margin-top: 60px
</style>
