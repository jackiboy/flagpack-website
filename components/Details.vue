<template>
  <div class="details__modal">
    <button class="details__modal--close" @click="closeDetails()">
      <i class="icon-close"></i>
    </button>
    <div class="container">
      <div class="details__modal--body">
        <header class="details__title">
            <span 
            class="fp fp-rounded details__title--flag" 
            :class="[
              {'fp-square': flag.type === 'square'},
              code
            ]"
            ></span>
            <div class="details__title--name">
              <h1>{{country.name}}</h1>
              <h4 class="details__title--native" v-if="country.name !== country.native">{{country.native}}</h4>
            </div>
          </header>
          <ul class="details__markup">
            <li>
              <details-markup :code="code" classes="fp"></details-markup>
            </li>
            <li>
              <details-markup :code="code" classes="fp fp-md"></details-markup>
            </li>
            <li>
              <details-markup :code="code" classes="fp fp-lg"></details-markup>
            </li>
            <li>
              <details-markup :code="code" classes="fp fp-rounded"></details-markup>
            </li>
            <li>
              <details-markup :code="code" classes="fp fp-rounded fp-md"></details-markup>
            </li>
            <li>
              <details-markup :code="code" classes="fp fp-rounded fp-lg"></details-markup>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import noScroll from 'no-scroll';
import Markup from './Details/Markup';

export default {
  name: "modal-details",
  components: {
    "details-markup": Markup
  },
  mounted() {

    noScroll.on();

    document.body.addEventListener('keyup', e => {
      if (this.details && e.keyCode === 27)
        this.closeDetails();
    });

  },
  methods: {
    closeDetails(){
        this.$store.dispatch('world/details', false);
        noScroll.off();
    }
  },
  computed: {
    details(){
      return this.$store.getters['world/details']
    },
    country(){
      return this.$store.getters['world/getCountry']
    },
    code(){
      return this.$options.filters.lowercase(this.country.code);
    },
    flag(){
      return this.$store.getters['world/getFlagType']
    }
  }
};
</script>