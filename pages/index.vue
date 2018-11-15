<template>
  <main class="container">
      <section class="countries__table">
        <country
          v-for="(country, key, index) in countries" 
          :key="index"
          :country="country"
          :code="key|lowercase"
          :continent="country.continent"
        ></country>
      </section>
  </main>
</template>

<script>
import Country from '~/components/Country';

export default {
  async asyncData ({ app, params, store, error }) {
    try {
      let countries = await store.getters['world/getCountries'];
      let continents = await store.getters['world/getContinents'];
      return { 
        countries,
        continents
      }
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    "country": Country,
  },
}
</script>