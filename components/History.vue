<template>
  <div class="your-guesses">
    <h1>User guesses</h1>
    <ul class="history-list">
      <li v-for="guess in guessesArray" :key="guess">
        <p :style="{ color: guess }">{{ guess }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["guessesArray"]
};
</script>

<style scoped>
.your-guesses {
  text-align: center;

  margin: 0 auto;
  width: 30rem;
}

h1 {
  margin-bottom: 2.4rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  text-align: left;
}
</style>
