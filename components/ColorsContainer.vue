<template>
  <div class="colors-container">
    <ColorBox v-for="(color, i) in colors" :key="i" :color="color" />
  </div>
</template>

<script>
export default {
  props: ["colors"]
};
</script>

<style scoped>
.colors-container {
  display: grid;
  grid-template-columns: 24rem 24rem;
  grid-template-rows: 24rem 24rem;

  border: 2px solid #000;
}
</style>
