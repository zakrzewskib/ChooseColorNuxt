<template>
  <div class="your-guesses">
    <header class="header-guesses">
      <h2>Your longest streak: {{ theLongestStreak }}</h2>
      <h2>You guessed:</h2>
    </header>

    <p v-if="guessesArray.length === 0">No guesses yet!</p>

    <ul class="history-list">
      <li v-for="guess in guessesArray" :key="guess" class="li-guess">
        <p :style="{ color: guess }">{{ guess }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["guessesArray", "theLongestStreak"]
};
</script>

<style scoped>
.your-guesses {
  text-align: center;

  margin: 0 auto;
  width: 50rem;
}

.header-guesses {
  margin-bottom: 2.4rem;
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

h1 {
  margin-bottom: 2.4rem;
}

.history-list {
  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
}
</style>
