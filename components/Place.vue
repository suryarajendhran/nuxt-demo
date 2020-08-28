<template>
  <div class="place">
    <img :src="location.img" width="235" height="300" />
    <h2>{{ location.name }}</h2>
    <p>{{ location.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "place",
  props: ["location"],
};
</script>