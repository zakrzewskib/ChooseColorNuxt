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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 65%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #212529;
}

h1 {
  font-size: 3.6rem;
}

.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 3.2rem;
}
</style>
