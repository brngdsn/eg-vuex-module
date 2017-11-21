<template><div class="github-graphql-client">

  <section class="section">
    <div class="container">
      <div class="content">
        <h1>Authenticate</h1>
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <!-- <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span> -->
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success">
            Login
          </button>
        </p>
      </div>
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'github-graphql-client',
    data () {
      return {
        busy: false
      }
    },
    computed: {
      ...mapGetters([
        // some state
      ])
    },
    methods: {
      ...mapActions([
        // some action
      ]),
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted GithubGraphqlClient!')
    }
  }
</script>

<style scoped>
  .github-graphql-client {

  }
</style>
