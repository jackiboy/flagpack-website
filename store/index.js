import { countries } from 'countries-list'

import Vuex from 'vuex'

//=== Store Modules

//== Base Modules
import world from './modules/world';

const createStore = () => {
  return new Vuex.Store({
    actions: {
      async nuxtServerInit ({ dispatch }, { app }) {
        const getCountries = countries;
        dispatch('world/setCountries', getCountries);
      }
    },
    modules: {
      world
    }
  })
}

export default createStore
