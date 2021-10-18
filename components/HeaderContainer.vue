<template>
  <h1>
    <span>{{ title }}</span> <span>{{ colorToSelect }}</span>
  </h1>
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
</style>
