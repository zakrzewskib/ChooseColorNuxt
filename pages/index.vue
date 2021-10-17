<template>
  <div class="container">
    <HeaderContainer />
    <ColorsContainer :colors="colors" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#123456", "#aabbcc", "#ffaacc", "#ffffff"]
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
