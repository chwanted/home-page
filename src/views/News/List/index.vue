<template>
  <div class="NewsList">
    <div class="banner">
      <!-- <div class="banner-title">新闻中心</div> -->
    </div>
    <section class="news-list">
      <div
        class="news-list-item"
        v-for="(item, index) in newsList"
        :key="index"
        @click="toDetail(item.id)"
      >
        <div class="news-img" v-if="!index">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="news-content">
          <div class="news-header">
            <span>{{ item.title }}</span>
            <span>{{ item.date }}</span>
          </div>
          <p class="news-summary">{{ item.summary }}</p>
          <div class="news-source">{{ item.source }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { newsList } from "../../../common/data";

const router = useRouter();
const toDetail = (id) => {
  router.push({ path: "/News-Detail", query: { id } });
};
</script>

<style lang="scss" scoped>
.NewsList {
  .banner {
    position: relative;
    width: 100vw;
    height: 500px;
    background: url("@/assets/images/news/news-center-bck.jpg") no-repeat;
    background-size: cover;
    background-position-y: 15%;

    @media screen and (max-width: 768px) {
      height: 1100px;
      background-position-y: 5%;
    }

    &-title {
      position: absolute;
      top: 50%;
      right: 20%;
      color: #fff;
    }
  }

  .news-list {
    padding: 4.1vw 300px;

    @media screen and (max-width: 768px) {
      padding: 4.1vw 100px;
    }

    &-item {
      display: flex;
      align-items: center;
      padding: 30px;
      box-sizing: border-box;
      padding: 2.5% 1.6666%;
      position: relative;
      text-align: left;
      transition: color 0.4s ease-out, background-color 0.4s ease-out;
      border-bottom: 1px solid #ececec;
      cursor: pointer;

      .news-img {
        width: 524px;
        height: 301px;
        overflow: hidden;
        margin-right: 30px;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.36s ease;
        }
      }
      .news-content {
        flex: 1;
      }

      &:last-of-type {
        border-bottom: none;
      }

      &:hover {
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 22px rgba(0, 0, 0, 0.12);
        .news-header {
          & > span {
            &:first-of-type {
              color: rgb(5,39,175);
            }
          }
        }

        .news-img {
          & > img {
            transform: scale(1.1);
          }
        }
      }

      .news-header {
        display: flex;
        & > span {
          display: inline-block;

          &:first-of-type {
            flex: 1;
            margin-right: 30px;
            color: #000;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; /* 这里是超出几行省略 */
            overflow: hidden;
          }

          &:last-of-type {
            color: #999;
          }
        }
      }

      .news-summary {
        color: #666;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
      }

      .news-source {
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        color: #999;
        display: inline-block;
        font-size: 12px;
        padding: 4px 6px;
        word-break: keep-all;

        @media screen and (max-width: 768px) {
          font-size: 48px;
          height: 74px;
          padding: 10px;
          line-height: 74px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
