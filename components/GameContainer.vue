<template>
  <div class="container" v-if="mounted && home == true">
    <HeaderContainer
      title="Choose correct color:"
      :colorToSelect="colorToSelect"
    />

    <Guess
      :correctColor="correctColor"
      :guessedWrong="guessedWrong"
      :guessedColor="guessedColor"
      @next-guess="nextGuess"
    />

    <DarkMode />
    <GuessStreak :streak="streak" />

    <ColorsContainer
      :colors="colors"
      :colorToSelect="colorToSelect"
      @selected-color="selectedColor"
    />
  </div>
</template>

<script>
export default {
  props: ["home"],

  data() {
    return {
      colors: [],

      correctColor: false,
      streak: 0,
      clickedNextGuess: true,
      guessedColor: "",
      guessedWrong: false,
      mounted: false
    };
  },

  mounted() {
    this.mounted = true;
    this.defineNewColorsToChoose();
  },

  computed: {
    colorToSelect() {
      return this.getRandomItemFromArray(this.colors);
    }
  },

  methods: {
    generateColor() {
      let result = "#";
      // prettier-ignore
      let hexadecimalNumbers = new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f");

      for (let i = 0; i < 6; i++) {
        let number = hexadecimalNumbers[Math.floor(Math.random() * (15 + 1))];
        result += number;
      }
      return result;
    },

    getRandomItemFromArray(array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    defineNewColorsToChoose() {
      this.colors = [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor()
      ];
      this.color = this.getRandomItemFromArray(this.colors);
    },

    selectedColor(color) {
      this.guessedWrong = true;
      this.guessedColor = color;
      if (this.clickedNextGuess) {
        if (this.colorToSelect === color) {
          this.correctColor = true;
          this.streak++;
          this.clickedNextGuess = false;
        } else {
          this.streak = 0;
        }
      }
    },
    nextGuess() {
      this.$emit("guessed-correctly", this.colorToSelect);

      this.defineNewColorsToChoose();
      this.correctColor = false;
      this.clickedNextGuess = true;
      this.guessedWrong = false;
    }
  }
};
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-direction: column

  align-items: center
  justify-content: center

  gap: 2.4rem
</style>
