<template>
  <button @click="toggleDarkMode">Dark Mode</button>
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
