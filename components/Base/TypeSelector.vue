<template>
  <div class="type__selector">
    <ul class="type__selector--menu">
      <li>
        <a 
          :class="{'is-active': flag.type === 'normal'}"
          @click="selectType('normal')"
          title="rectangle flags"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15"><rect width="20" height="14" x=".5" y=".5" fill-rule="nonzero" rx="3"/></svg>
        </a>
      </li>
      <li>
        <a 
          :class="{'is-active': flag.type === 'square'}"
          @click="selectType('square')"
          title="square flags"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" fill-rule="nonzero" rx="3"/></svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "base-selector",
  methods: {
    selectType(type){
      localStorage.setItem('flag-type', type);
      this.$store.dispatch('world/setFlagType', type);
    }
  },
  computed: {
    flag(){
      return this.$store.getters['world/getFlagType']
    }
  }
};
</script>