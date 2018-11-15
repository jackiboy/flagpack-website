<template>
  <li class="countries__country">
    <span class="fp fp-lg" :class="code"></span>
    <h4>{{country.name}}</h4>
  </li>
</template>

<script>
export default {
  name: "country",
  props: ["country", "code", "continent"]
};
</script>