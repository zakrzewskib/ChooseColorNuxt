<template>
  <header>
    <h1>
      <span>{{ title }}</span> <span>{{ colorToSelect }}</span>
    </h1>
  </header>
</template>

<script>
export default {
  props: ["title", "colorToSelect"]
};
</script>

<style scoped>
@media (max-width: 40rem) {
  span:last-child {
    display: block;
  }
  h1 {
    text-align: center;
  }
}

/* 500px */
@media (max-width: 32em) {
  h1 {
    font-size: 3.2rem;
  }
}
</style>
