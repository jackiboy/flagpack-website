<template>
    <div>
      <div class="body" style="background-image: url('/wave.svg')">
        <transition name="details">
          <modal-details v-if="details"></modal-details>
        </transition>
        <base-nav></base-nav>
        <base-header></base-header>
        <base-tabs></base-tabs>
        <main class="container">
          <section class="countries__table" v-if="results.length > 0"> 
            <country
              v-for="(country, index) in results" 
              :key="index"
              :country="country"
              :code="country.code|lowercase"
              :continent="country.continent"
              v-if="country.name !== 'Antarctica'"
            ></country>
          </section>
          <section class="countries__table" v-else> 
            <country
              v-for="(country, index) in countries" 
              :key="index"
              :country="country"
              :code="country.code|lowercase"
              :continent="country.continent"
              v-if="country.name !== 'Antarctica'"
            ></country>
          </section>
        </main>
      </div>
      <base-footer></base-footer>
    </div>
</template>

<script>
import noScroll from 'no-scroll';
import Nav from '~/components/Base/Nav';
import Header from '~/components/Base/Header/Header';
import Tabs from '~/components/Base/Tabs';
import Footer from '~/components/Base/Footer';
import Country from '~/components/Country';
import Details from '~/components/Details';

export default {
  async asyncData ({ params, store, error }) {
    try {
      let continent = await store.getters['world/getContinentCode'](params.slug);
      let countries = await store.getters['world/getCountries'](continent[0].code);
      return { 
        countries
      }
    } catch (err) {
      console.log(err);
    }
  },
  created(){
    if(this.details)
      this.$store.dispatch('world/details', false);
      noScroll.off();
  },
  components: {
    "base-nav": Nav, 
    "base-header": Header,
    "base-tabs": Tabs,
    "base-footer": Footer,
    "country": Country,
    "modal-details": Details
  },
  computed: {
    results(){
        return this.$store.getters['world/getSearchResults'];
    },
    details(){
      return this.$store.getters['world/details']
    },
  }
}
</script>