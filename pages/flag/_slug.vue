<template>
    <div>
      <base-nav></base-nav>
      <main class="container">
        {{country}}
      </main>
    </div>
</template>

<script>
import Nav from '~/components/Base/Nav';
import Header from '~/components/Base/Header/Header';
import Tabs from '~/components/Base/Tabs';
import Country from '~/components/Country';

export default {
  async asyncData ({ params, store, error }) {
    try {
      let country = await store.getters['world/getCountry'](params.slug);
      return { 
        country
      }
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    "base-nav": Nav, 
    "base-header": Header,
    "base-tabs": Tabs,
    "country": Country,
  },
  computed: {
    results(){
        return this.$store.getters['world/getSearchResults'];
    }
  }
}
</script>