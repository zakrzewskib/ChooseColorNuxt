<template>
  <div class="container">
    <HeaderContainer
      title="Choose correct color:"
      :colorToSelect="colorToSelect"
    />

    <div v-if="correctColor" class="winning-message">
      <h1>GJ ✌</h1>
      <button @click="nextGuess">Next Guess</button>
    </div>

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
      loaded: false,
      colors: [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor()
      ],

      correctColor: false
    };
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
      console.log("Again from parent: ", color);
      if (this.colorToSelect === color) {
        this.correctColor = true;
      }
    },
    nextGuess() {
      this.defineNewColorsToChoose();
      this.correctColor = false;
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

.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 3.2rem;
}

.winning-message {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.winning-message button {
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  font-family: inherit;
  font-size: 2.4rem;
  color: #212529;
  background-color: #862e9c;

  cursor: pointer;
}

button:hover {
  background-color: #9c36b5;
}
</style>
