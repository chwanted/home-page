<template>
  <div class="NewsDetail">
    <div class="banner" />

    <div class="NewsDetail-wrap">
      <div class="NewsDetail-wrap-title">{{ state.thisNews.title }}</div>
      <div class="NewsDetail-wrap-date">{{ state.thisNews.date }}</div>
      <div
        class="NewsDetail-wrap-content"
        v-html="state.thisNews.content"
      ></div>
      <div class="NewsDetail-wrap-source">{{ state.thisNews.source }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { newsList } from "../../../common/data";
const route = useRoute();
const state = reactive({
  thisNews: {},
});
onMounted(() => {
  const { id } = route.query;
  state.thisNews = newsList.filter((item) => item.id == id)[0];
});
</script>

<style lang="scss" scoped>
.NewsDetail {
  .banner {
    width: 100vw;
    height: 500px;
    background: url("@/assets/images/news/news-center-bck.jpg") no-repeat;
    background-size: cover;
    background-position-y: 15%;
  }

  &-wrap {
    padding: 4.1vw 300px;
    text-align: left;

    &-title {
      font-size: 22px;
      color: #333;
    }

    &-date {
      margin-top: 36px;
      color: #999;
    }

    &-content {
      margin: 30px 0;
      padding: 30px 0;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px dotted #ebebeb;
      color: #666 !important;
    }

    &-source {
      border: 1px solid #c7c7c7;
      border-radius: 3px;
      box-sizing: border-box;
      color: #6f6f6f;
      display: inline-block;
      font-size: 14px;
      height: 25px;
      line-height: 23px;
      margin-right: 15px;
      padding: 0 10px;
      cursor: default;
    }
  }
}
</style>
