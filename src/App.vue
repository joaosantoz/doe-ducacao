<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>