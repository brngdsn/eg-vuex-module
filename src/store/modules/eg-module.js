import api from '../../api/eg-api'
import * as types from '../mutation-types'

const state = {
  someResources: [],
  someOtherResources: []
}

const getters = {
  someResources: state => state.someResources,
  someOtherResources: state => state.someOtherResources
}

const actions = {
  async fetchResource ({commit}, config) {
    return api.get(config.url)
      .then(response => {
        console.log(response, 'response')
        commit(types.MUT_RESOURCE, {
          additive: config.additive,
          prop: config.prop,
          body: response.data,
          headers: response.headers
        })
        return response.data
      })
      .catch(e => Promise.reject(e))
  }
}

const mutations = {
  [types.MUT_RESOURCE] (state, resource) {
    // state['pages'] = resource.headers.get('x-total-count')
    if (resource.additive) {
      state[resource.prop] = [...state[resource.prop], ...resource.body]
    } else {
      state[resource.prop] = resource.body
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
