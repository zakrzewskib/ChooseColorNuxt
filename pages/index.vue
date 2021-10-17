<template>
  <div class="container">
    <HeaderContainer title="Choose correct color:" :colorToSelect="colors[0]" />
    <ColorsContainer :colors="colors" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [Math.random(), "#aabbcc", "#ffaacc", "#ffffff"]
    };
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 65%;
  overflow-x: hidden;
}

.container {
  width: 90%;
  margin: 9.6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
}
</style>
