<template>
  <nav class="nav">
    <div class="container">
        <nuxt-link to="/all" class="nav--brand">
            <img src="logo.svg" alt="Flag Pack"/>
        </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "base-nav",
};
</script>