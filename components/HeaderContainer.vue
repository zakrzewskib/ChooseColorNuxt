<template>
  <h1>{{ title }} {{ colorToSelect }}</h1>
</template>

<script>
export default {
  props: ["title", "colorToSelect"]
};
</script>

<style scoped>
h1 {
  font-size: 6.4rem;
}
</style>
