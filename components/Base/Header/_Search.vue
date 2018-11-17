<template>
    <div class="header__search">
        <vue-fuse 
          :keys="params" 
          :list="countries" 
          :default-all="false"
          placeholder="find your flag!"
          :threshold="0.1"
          :distance="1"
          :matchAllTokens="true"
          :min-match-char-length="3"
          @fuseResultsUpdated="results = $event"
          @fuseInputChanged="query = $event"
          ref="search"
        ></vue-fuse>
        <span class="header__search--button" v-if="!clear">
          <i class="icon-search"></i>
        </span>
        <button class="header__search--button is-button" @click="clearSearch()" v-else>
          <i class="icon-close"></i>
        </button>
    </div>
</template>

<script>
export default {
  name: "header-search",

  mounted(){
    this.results = [];
  },

  data: () => {
    return {
      query: '',
      results: [],
      clear: false,
      params: ["name", "code", "native", "capital", "continent"]
    }
  },

  watch: {
    query(){
      if(this.query.length > 0)
        this.clear = true
      else
        this.clear = false
    },
    results(){
      this.$store.dispatch('world/searchResults', this.results)
    }
  },

  methods: {
    clearSearch(){
      this.results = []
      this.$refs.search.value = ''
    }
  },

  computed: {
    countries() {
      return this.$store.getters["world/getCountries"]('ALL');
    }
  }
  
};
</script>