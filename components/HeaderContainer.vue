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
  font-size: 3.6rem;
}
</style>
