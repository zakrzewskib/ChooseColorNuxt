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
      console.log("Color from parent", color);
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

  border: 2px solid #000;
}

/* 1 em = 16px */
@media (max-width: 62em) {
  .colors-container {
    width: 50%;
  }
}

@media (max-width: 50em) {
  .colors-container {
    width: 65%;
  }
}
</style>
