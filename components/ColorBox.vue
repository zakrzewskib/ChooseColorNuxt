<template>
  <div @click="chooseColor" :style="boxColor" class="color-box"></div>
</template>

<script>
export default {
  props: ["color"],
  methods: {
    chooseColor() {
      this.$emit("selected-color", this.color);
    }
  },
  computed: {
    boxColor() {
      return {
        "background-color": this.color
      };
    }
  }
};
</script>

<style scoped>
.color-box {
  aspect-ratio: 1;

  cursor: pointer;
}
</style>
