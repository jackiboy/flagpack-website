const actions = {
  setCountries: (context, payload) => {
    const countries = Object.keys(payload).map(key => {
      payload[key]['code'] = key;
      return payload[key]
    });
    context.commit('setCountries', countries)
  },
  searchResults: (context, payload) => {
    context.commit('searchResults', payload)
  },
  details: (context, arg) => {
    context.commit('details', arg)
  },
  setCountry: (store, query) => {
    const country = store.state.countries.filter(country => {
      return country.code === query.toUpperCase()
    });
    store.commit('setCountry', country)
  },
}

export default actions;