<template>
  <div class="colors-container">
    <ColorBox
      v-for="(color, i) in colors"
      :key="i"
      :color="color"
      @selected-color="selectedColor"
    />
  </div>
</template>

<script>
export default {
  props: ["colors", "colorToSelect"],
  methods: {
    selectedColor(color) {
      this.$emit("selected-color", color);
    }
  }
};
</script>

<style scoped>
.colors-container {
  width: 33%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

/* 1 em = 16px, ->  ~1000px*/
@media (max-width: 62em) {
  .colors-container {
    width: 40%;
  }
}

/* 800px */
@media (max-width: 50em) {
  .colors-container {
    width: 45%;
  }
}

/* 500px */
@media (max-width: 32em) {
  .colors-container {
    width: 65%;
  }
}
</style>
