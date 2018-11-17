function sorter(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}


const gb = [
  {
    name: "England",
    native: "England",
    code: "GB-ENG",
    continent: "EU",
    capital: "London"
  },
  {
    name: "Scotland",
    native: "Scotland",
    code: "GB-SCT",
    continent: "EU",
    capital: "Edinburgh"
  },
  {
    name: "Wales",
    native: "Wales",
    code: "GB-WLS",
    continent: "EU",
    capital: "Cardiff"
  },
  {
    name: "Northern Ireland",
    native: "Northern Ireland",
    code: "GB-NIR",
    continent: "EU",
    capital: "Belfast"
  },
  {
    name: "Shetland",
    native: "Shetland",
    code: "GB-ZET",
    continent: "EU",
    capital: "Lerwick"
  },
]

const actions = {
  setCountries: (context, payload) => {

    const countries = Object.keys(payload).map(key => {
      payload[key]['code'] = key;
      return payload[key]
    });
    
    const allCountries = [...countries, ...gb]

    allCountries.sort(sorter("name"));

    context.commit('setCountries', allCountries)

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