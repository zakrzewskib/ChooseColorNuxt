<template>
  <div v-if="correctColor" class="message">
    <p>GJ ✌</p>
    <button @click="nextGuess">Next Guess</button>
  </div>

  <div v-else-if="guessedWrong" class="message message-wrong">
    <p>
      You guessed wrong! -
      <span :style="{ color: guessedColor }">{{ guessedColor }}</span>
    </p>
    <!-- <p>This color is {{ guessedColor }}</p> -->
  </div>

  <div v-else class="message">
    <p>Waiting for your guess...</p>
  </div>
</template>

<script>
export default {
  props: ["correctColor", "guessedWrong", "guessedColor"],
  methods: {
    nextGuess() {
      this.$emit("next-guess");
    }
  }
};
</script>

<style scoped lang="sass">
@import '~/assets/variables.scss'

.message
  display: flex
  gap: 0.8rem
  align-items: center

.message-wrong
  flex-direction: column


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
