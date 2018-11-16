<template>
  <nav class="tabs" role="navigation">
    <div class="container">
      <ul class="tabs--navigation">
        <li
          v-for="(continent, index) in continents"
          :key="index"
        >
          <nuxt-link :to="continent.slug">{{continent.name}}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "country-tabs",
  computed: {
    continents() { 
      return this.$store.getters['world/getContinents']
    }
  }
};
</script>