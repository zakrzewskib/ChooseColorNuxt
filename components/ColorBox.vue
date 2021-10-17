<template>
  <div :style="boxColor" class="color-box"></div>
</template>

<script>
export default {
  props: ["color"],
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
  width: 100%;
  height: 100%;
}
</style>
