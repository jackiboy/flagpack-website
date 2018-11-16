const getters = {
  getContinents: state => state.continents,
  getContinentCode(state) {
    return query => state.continents.filter(continent => {
      return continent.slug === query
    });
  },
  getCountries(state) {
    return query => state.countries.filter(country => {
      if(query === 'ALL'){
        return state.countries
      }
      return country.continent === query
    });
  },
  getSearchResults: state => state.searchResults,
  getCountry(state) {
    return query => state.countries.filter(country => {
      return country.code === query.toUpperCase()
    });
  },
}

export default getters;
