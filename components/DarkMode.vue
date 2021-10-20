<template>
  <button @click="toggleDarkMode">Toggle dark mode</button>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
  }
};
</script>

<style scoped></style>
