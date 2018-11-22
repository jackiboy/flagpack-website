import extra from '~/helpers/extraFlags';
import sorter from '~/helpers/sorter';

const actions = {
  setCountries: (context, payload) => {

    const countries = Object.keys(payload).map(key => {
      payload[key]['code'] = key;
      if(payload[key].name === 'New Zealand'){
        payload[key].native = "Aotearoa"
      }
      return payload[key]
    });
    
    const allCountries = [...countries, ...extra]

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
  setFlagType: (context, arg) => {
    let payload;

    if(arg === 'square'){
      payload = {
        type: 'square'
      }
    } else {
      payload = {
        type: 'normal'
      }
    } 

    context.commit('setFlagType', payload)
  },
}

export default actions;