import Vue from 'vue'
import Router from 'vue-router'
import SomeResources from '@/components/SomeResources'
import RESTClient from '@/components/RESTClient'
import GenericRestClient from '@/components/GenericRestClient'
import GenericRestClientV2 from '@/components/GenericRestClientV2'
import GeoClient from '@/components/GeoClient'
import MapboxGeoClient from '@/components/MapboxGeoClient'
import GithubGraphqlClient from '@/components/GithubGraphqlClient'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/github-graphql-client',
      name: 'GithubGraphqlClient',
      component: GithubGraphqlClient
    },
    {
      path: '/mapbox-geo-client',
      name: 'MapboxGeoClient',
      component: MapboxGeoClient
    },
    {
      path: '/geo-client',
      name: 'GeoClient',
      component: GeoClient
    },
    {
      path: '/generic-rest-client-v2',
      name: 'GenericRestClientV2',
      component: GenericRestClientV2
    },
    {
      path: '/generic-rest-client',
      name: 'GenericRestClient',
      component: GenericRestClient
    },
    {
      path: '/rest-client',
      name: 'RESTClient',
      component: RESTClient
    },
    {
      path: '/some-resources',
      name: 'SomeResources',
      component: SomeResources
    },
    {
      path: '/',
      redirect: '/github-graphql-client'
    }
  ]
})
