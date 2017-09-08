<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang='stylus'>
  @import 'assets/_transition.styl'
  @import '~buefy/lib/buefy.css'
  @import '~bulma/css/bulma.css'
  #app
    font-family: Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
  .page
    padding: 5% 10%
    width: 100vw
    height: 100vh
</style>
