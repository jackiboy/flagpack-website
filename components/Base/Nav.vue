<template>
  <nav class="nav">
    <div class="container">
        <nuxt-link to="/world" class="nav--brand">
            <img src="/logo.svg" alt="Flag Pack"/>
        </nuxt-link>
        <div class="nav__menu">
          <ul>
            <li>
              <a href="https://github.com/jackiboy/flagpack" target="_blank" title="github">
                <i class="icon-github"></i>
              </a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "base-nav",
};
</script>