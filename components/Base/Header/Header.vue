<template>
  <header class="header">
    <div class="container">
        <p class="header--intro">A lightweight flag icon toolkit for the web.</p>
        <header-search></header-search>
    </div>
  </header>
</template>

<script>
import Search from './_Search'
export default {
  name: "base-header",
  components: {
    "header-search": Search,
  },
};
</script>