<template>
  <div class="NewsDetail"></div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { newsList } from "../../../common/data";
const route = useRoute();
const router = useRouter();
const { id } = route.query;

console.log('id',id);
</script>

<style lang="scss" scoped>
.NewsDetail {
}
</style>
