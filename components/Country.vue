<template>
  <div class="country__card">
    <span class="fp country__card--flag" :class="code"></span>
    <h4 class="country__card--name">{{country.name}}</h4>
  </div>
</template>

<script>
export default {
  name: "country",
  props: ["country", "code", "continent"]
};
</script>