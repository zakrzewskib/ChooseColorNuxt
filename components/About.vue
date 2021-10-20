<template>
  <div class="about">
    <Nav @about-clicked="changeToAbout" @home-clicked="changeToHome" />
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  methods: {
    changeToAbout() {
      this.$emit("change-to-about");
    },

    changeToHome() {
      this.$emit("change-to-home");
    }
  }
};
</script>

<style scoped>
.about {
  text-align: center;
}

.about h1 {
  margin-top: 2.4rem;
}
</style>
