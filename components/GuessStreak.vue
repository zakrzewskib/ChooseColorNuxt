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
  right: 3%;
  top: 0.8rem;
}
</style>
