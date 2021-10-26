<template>
  <nav class="navbar">
    <p
      class="my-nuxt-link"
      to="/"
      :class="{ active: activeHome }"
      @click="homeClicked"
    >
      Home
    </p>
    <p
      class="my-nuxt-link"
      to="/about"
      :class="{ active: activeAbout }"
      @click="aboutClicked"
    >
      About
    </p>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeHome: true,
      activeAbout: false
    };
  },

  methods: {
    homeClicked() {
      this.activeHome = true;
      this.activeAbout = false;

      console.log("home");

      this.$emit("home-clicked");
    },
    aboutClicked() {
      this.activeAbout = true;
      this.activeHome = false;

      console.log("about");

      this.$emit("about-clicked");
    }
  }
};
</script>

<style scoped lang="sass">
@import '~/assets/variables.scss'

.navbar
  display: flex
  gap: 1.6rem
  justify-content: center

  margin-top: 0.8rem
  margin-bottom: 2.4rem


.my-nuxt-link
  text-decoration: underline

  font-size: 2.4rem
  color: inherit

  cursor: pointer


.active
  color: $link-color
</style>
