<template>
    <div class="header--search">
        <vue-fuse 
          :keys="params" 
          :list="countries" 
          :default-all="false"
          placeholder="search countries..."
          :threshold="0.1"
          :distance="1"
          :matchAllTokens="true"
          :min-match-char-length="3"
          @fuseResultsUpdated="results = $event"
        ></vue-fuse>
    </div>
</template>

<script>
export default {
  name: "header-search",
  data: () => {
    return {
      results: [],
      params: ["name", "code", "native", "capital", "continent"]
    }
  },
  watch: {
    results(){
      this.$store.dispatch('world/searchResults', this.results)
    }
  },
  computed: {
    countries() {
      return this.$store.getters["world/getCountries"]('ALL');
    }
  }
};
</script>