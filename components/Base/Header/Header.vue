<template>
  <header class="header">
    <div class="container">
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