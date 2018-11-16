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
  }
}

export default actions;