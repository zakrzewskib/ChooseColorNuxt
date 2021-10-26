<template>
  <div>
    <Nav @about-clicked="changeToAbout" @home-clicked="changeToHome" />

    <About
      v-if="about"
      @change-to-about="changeToAbout"
      @change-to-home="changeToHome"
    />

    <GameContainer v-if="mounted && home == true" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "dark-mode"
      }
    };
  },

  data() {
    return {
      mounted: false,
      about: false,
      home: true
    };
  },

  mounted() {
    this.mounted = true;
  },

  methods: {
    changeToAbout() {
      this.about = true;
      this.home = false;
    },

    changeToHome() {
      this.about = false;
      this.home = true;
    }
  }
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")

*
  padding: 0
  margin: 0
  box-sizing: border-box

html
  font-size: 65%

body
  font-family: "Roboto", sans-serif
  line-height: 1
  font-weight: 400
  color: #212529

body.dark-mode
  background-color: #000
  color: #fff

p
  font-size: 2.4rem

h1
  font-size: 3.6rem
</style>
