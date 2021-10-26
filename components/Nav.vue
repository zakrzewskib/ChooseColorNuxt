<template>
  <nav class="navbar">
    <p class="my-nuxt-link" :class="{ active: active1 }" @click="firstClicked">
      Home
    </p>
    <p class="my-nuxt-link" :class="{ active: active2 }" @click="secondClicked">
      History
    </p>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active1: true,
      active2: false
    };
  },

  methods: {
    firstClicked() {
      this.active1 = true;
      this.active2 = false;
      this.$emit("first-clicked");
    },
    secondClicked() {
      this.active2 = true;
      this.active1 = false;

      this.$emit("second-clicked");
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
