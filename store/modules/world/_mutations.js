const mutations ={
  setCountries(state, payload){
    state.countries = payload
  },
  searchResults(state, results){
    state.searchResults = results
  },
  details(state, arg){
    state.details = arg
  },
  setCountry(state, payload){
    state.country = payload[0]
  },
  setFlagType(state, payload){
    state.flag = payload
  },
}

export default mutations;