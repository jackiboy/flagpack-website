const getters = {
  getContinents: state => state.continents,
  getContinentCode(state) {
    return query => state.continents.filter(continent => {
      return continent.slug === query
    });
  },
  getCountries(state) {
    return query => state.countries.filter(country => {
      if(query === 'WORLD'){
        return state.countries
      }
      return country.continent === query
    });
  },
  getSearchResults: state => state.searchResults,
  details: state => state.details,
  getCountry: state => state.country,
  getFlagType: state => state.flag,
}

export default getters;
