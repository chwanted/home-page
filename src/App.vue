<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
  <GoTop></GoTop>
</template>

<script setup>
import Header from "./components/Header.vue";
import GoTop from "./components/GoTop.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>

</style>
