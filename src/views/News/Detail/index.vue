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

    @media screen and (max-width: 768px) {
      background-position-y: top;
      height: 1100px;
    }
  }

  &-wrap {
    padding: 4.1vw 300px;
    text-align: left;

    @media screen and (max-width: 768px) {
      padding: 4.1vw 100px;
    }

    &-title {
      font-size: 22px;
      color: #333;

      @media screen and (max-width: 768px) {
        font-size: 84px;
        font-weight: 500;
      }
    }

    &-date {
      margin-top: 36px;
      color: #999;
      @media screen and (max-width: 768px) {
        font-size: 68px;
      }
    }

    &-content {
      margin: 30px 0;
      padding: 30px 0;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px dotted #ebebeb;
      color: #666 !important;
    }

    &-source {
      box-sizing: border-box;
      color: #6f6f6f;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      color: #999;
      display: inline-block;
      font-size: 12px;
      padding: 4px 6px;
      word-break: keep-all;
      cursor: default;

      @media screen and (max-width: 768px) {
        font-size: 48px;
        height: 84px;
        padding: 10px;
        line-height: 70px;
        border-radius: 8px;
      }
    }
  }
}
</style>
