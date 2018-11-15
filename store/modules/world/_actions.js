const actions = {
  setCountries: (context, payload) => {
    context.commit('setCountries', payload)
  },
  setContinents: (context, payload) => {
    context.commit('setContinents', payload)
  },
}

export default actions;