<template>
  <div>
    <About
      v-if="about"
      @change-to-about="changeToAbout"
      @change-to-home="changeToHome"
    />

    <div class="container" v-if="mounted && home == true">
      <Nav @about-clicked="changeToAbout" @home-clicked="changeToHome" />

      <HeaderContainer
        title="Choose correct color:"
        :colorToSelect="colorToSelect"
      />

      <CorrectGuess :correctColor="correctColor" @next-guess="nextGuess" />
      <GuessStreak :streak="streak" />

      <ColorsContainer
        :colors="colors"
        :colorToSelect="colorToSelect"
        @selected-color="selectedColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      colors: [],

      correctColor: false,
      mounted: false,
      streak: 0,
      clickedNextGuess: true,
      about: false,
      home: true
    };
  },

  mounted() {
    this.defineNewColorsToChoose();
    this.mounted = true;
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
      }
    },
    nextGuess() {
      this.defineNewColorsToChoose();
      this.correctColor = false;
      this.clickedNextGuess = true;
    },

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

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 65%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #212529;
}

h1 {
  font-size: 3.6rem;
}

p {
  font-size: 2.4rem;
}

.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 3.2rem;
}
</style>
