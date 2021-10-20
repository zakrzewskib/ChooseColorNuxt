<template>
  <button @click="toggleDarkMode">{{ content }}</button>
</template>

<script>
export default {
  data() {
    return {
      content: "🌞",
      dark: false
    };
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      if (this.content == "🌙") {
        this.content = "🌞";
      } else {
        this.content = "🌙";
      }
    }
  }
};
</script>

<style scoped>
button {
  background: none;
  border: none;

  font-size: 2.4rem;

  position: absolute;
  left: 3%;
  top: 0.3rem;

  cursor: pointer;
}

@media (min-width: 62em) {
  button {
    left: 25%;
  }
}
</style>
