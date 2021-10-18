<template>
  <div class="container">
    <HeaderContainer
      title="Choose correct color:"
      :colorToSelect="colorToSelect"
    />
    <ColorsContainer :colors="colors" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      randomColors: [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor()
      ],
      colors: []
    };
  },

  computed: {
    colorToSelect() {
      return this.getRandomItemFromArray(this.colors);
    }
  },

  created() {
    // this funcionality should be called also when going to next color guessing
    this.colors = [...this.randomColors];
    console.log("created");
    // When going back to home page from about created is called - a problem?
  },

  methods: {
    generateColor() {
      let result = "#";
      // https://github.com/prettier/prettier-vscode/issues/352
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
</style>
