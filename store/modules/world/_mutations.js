const mutations ={
  setCountries(state, payload){
    state.countries = payload
  },
  searchResults(state, results){
    state.searchResults = results
  }
}

export default mutations;