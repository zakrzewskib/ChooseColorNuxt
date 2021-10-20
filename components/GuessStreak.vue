<template>
  <div class="streak">
    <p>{{ streak }}🔥</p>
  </div>
</template>

<script>
export default {
  props: ["streak"]
};
</script>

<style scoped>
.streak {
  position: absolute;
  /* right: 10%; */
  right: 3%;
  top: 0.8rem;
}

@media (min-width: 62em) {
  .streak {
    right: 25%;
  }
}
</style>
