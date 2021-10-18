<template>
  <div class="navbar">
    <NuxtLink class="my-nuxt-link" to="/">Home</NuxtLink>
    <NuxtLink class="my-nuxt-link" to="/about">About</NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  font-size: 2.4rem;

  display: flex;
  gap: 1.6rem;
  justify-content: center;

  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
}

.my-nuxt-link {
  color: inherit;
}

.nuxt-link-exact-active {
  color: #862e9c;
}
</style>
