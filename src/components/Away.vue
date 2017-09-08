<template>
  <div class="away page">
    <nav-bar></nav-bar>
    <section class="hero is-medium is-primary is-bold">
      <h1 class="title">Away</h1>
      <h2 class="subtitle">Some Other Resources</h2>
      <b-table :data="someOtherResources">

        <template scope="props">
            <b-table-column label="RID" width="60" numeric>
                {{ props.row.rid }}
            </b-table-column>

            <b-table-column label="Name">
                {{ props.row.rname }}
            </b-table-column>
        </template>

        <template slot="empty">
            <section class="section">
                <div class="content has-text-grey has-text-centered">
                    <p>
                        <b-icon
                            icon="sentiment_very_dissatisfied"
                            size="is-large">
                        </b-icon>
                    </p>
                    <p>Nothing here.</p>
                </div>
            </section>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'away',
    components: {
      NavBar
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'someOtherResources'
      ])
    },
    methods: {
      ...mapActions([
        'fetchResource'
      ]),
      async fetch () {
        this.busy = true
        await this.fetchResource({
          url: '/some-other-resources',
          prop: 'someOtherResources'
        })
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted Away Component!')
    }
  }
</script>

<style lang="stylus" scoped>
  .hero
    padding: 1rem
</style>
