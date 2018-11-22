<template>
  <div class="country__card" @click="openDetails">
    <span 
      class="fp country__card--flag" 
      :class="[
        {'fp-square': flag.type === 'square'},
        code
      ]"
    ></span>
    <h4 class="country__card--name">{{country.name|truncate(25)}}</h4>
  </div>
</template>

<script>
export default {
  name: "country",
  props: ["country", "code", "continent"],
  methods: {
    openDetails(){
      this.$store.dispatch('world/setCountry', this.code);
      this.$store.dispatch('world/details', true);
    }
  },
  computed: {
    flag(){
      return this.$store.getters['world/getFlagType'];
    }
  }
};
</script>