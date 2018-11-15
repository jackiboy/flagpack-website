import { continents, countries } from 'countries-list'

import Vuex from 'vuex'

//=== Store Modules

//== Base Modules
import world from './modules/world';

const createStore = () => {
  return new Vuex.Store({
    actions: {
      async nuxtServerInit ({ dispatch }, { app }) {
        const getCountries = await countries;
        const getContinents = await continents;
        dispatch('world/setCountries', getCountries);
        dispatch('world/setContinents', getContinents);
      }
    },
    modules: {
      world
    }
  })
}

export default createStore