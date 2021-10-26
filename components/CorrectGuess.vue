<template>
  <div v-if="correctColor" class="winning-message">
    <p>GJ ✌</p>
    <button @click="nextGuess">Next Guess</button>
  </div>
</template>

<script>
export default {
  props: ["correctColor"],
  methods: {
    nextGuess() {
      this.$emit("next-guess");
    }
  }
};
</script>

<style scoped lang="sass">
@import '~/assets/variables.scss'

.winning-message
  display: flex
  gap: 0.8rem
  align-items: center


button
  background: none !important
  border: none
  padding: 0 !important

  font-weight: 500
  font-family: inherit
  text-decoration: underline

  font-size: 2.4rem
  color: $link-color

  cursor: pointer
</style>
