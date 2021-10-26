<template>
  <div>
    <HeaderContainer
      title="Choose correct color:"
      :colorToSelect="colorToSelect"
    />

    <Guess :correctColor="correctColor" @next-guess="nextGuess" />

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
  data() {
    return {
      colors: [],

      correctColor: false,
      streak: 0,
      clickedNextGuess: true
    };
  },

  mounted() {
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
      if (this.clickedNextGuess) {
        if (this.colorToSelect === color) {
          this.correctColor = true;
          this.streak++;
          this.clickedNextGuess = false;
        } else {
          this.streak = 0;
        }
      } else {
      }
    },
    nextGuess() {
      this.defineNewColorsToChoose();
      this.correctColor = false;
      this.clickedNextGuess = true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
