<template>
  <Swiper
    :modules="bannerModules"
    :slidesPerView="1"
    :initialSlide="0"
    :loop="true"
    :pagination="{ clickable: true }"
    class="banner-swiper"
  >
    <SwiperSlide v-for="(item, index) in bannerList" :key="index">
      <div class="banner-swiper-item">
        <div v-bind:class="['swiper-item', `swiper-item${index}`]" />
        <img class="banner-swiper-img" :src="item.img" />
      </div>
      <div class="banner-swiper-title">{{ item.title }}</div>
    </SwiperSlide>
  </Swiper>

  <main class="main-body">
    <ul class="statistics">
      <li
        v-for="(item, index) in state.numberList"
        :key="index"
        class="statistics-item"
      >
        <div class="statistics-item-box">
          <div class="statistics-item-box-num">
            <CountTo
              :startVal="800"
              :endVal="item.num"
              duration="3000"
            ></CountTo>
            <span v-if="item.more">+</span>
            <span>{{ item.unit }}</span>
          </div>
          <div class="statistics-item-box-label">{{ item.label }}</div>
        </div>
      </li>
    </ul>

    <section class="solution">
      <strong>各产业解决方案</strong>
      <div class="solution-container">
        <div
          v-bind:class="['solution-container-item', `solution-item-${index}`]"
          v-for="(item, index) in solutionList"
          :key="index"
        >
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </section>

    <section class="news">
      <strong>资讯新闻</strong>
      <div class="news-container"><NewsList :newsList="newsList" /></div>
    </section>

    <section class="Partner">
      <strong>合作伙伴</strong>
      <div class="Partner-container"><Partner /></div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { Autoplay, Pagination } from "swiper";
import { solutionList, bannerList, newsList } from "../../common/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CountTo } from "vue3-count-to";
import Partner from "@/components/Partner.vue";
import NewsList from "@/components/NewsList.vue";
import "swiper/css/pagination";
import "swiper/css";

const bannerModules = [Autoplay, Pagination];
const state = reactive({
  navIndex: 0,
  numberList: [
    { num: 328, label: "服务客户", unit: "家", more: false },
    { num: 512, label: "交付项目", unit: "个", more: false },
    { num: 43200, label: "建工面积", unit: "㎡", more: true },
    { num: 3000, label: "团队成立", unit: "天", more: true },
  ],
});

const formatNumber = (num) => {
  // 格式化数据
  return num.replace(/\+/g, "");
};
</script>

<style lang="scss" scoped>
@import "@/assets/font/font.css";

.banner-swiper {
  width: 100%;

  .swiper-wrapper {
    .swiper-slide {
      position: relative;
      overflow: hidden;
    }
  }

  &-item {
    position: relative;
    overflow: hidden;
  }

  .swiper-item {
    height: 814px;
    width: 100vw;
    transform: scale(1.05);
    filter: blur(0.2vw);
  }

  .swiper-item0 {
    background: url("@/assets/images/banner/banner2.jpg") no-repeat center/cover;
  }

  .swiper-item1 {
    background: url("@/assets/images/banner/banner1.jpg") no-repeat center/cover;
  }

  .swiper-item2 {
    background: url("@/assets/images/banner/banner3.jpg") no-repeat center/cover;
  }

  &-img {
    position: absolute;
    top: 19%;
    left: 0;
    height: 600px;
    width: 100vw;
    object-fit: cover;
    overflow: hidden;
  }

  &-title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "LvJianDeXingKai";
    font-size: 110px;
    color: #ffffff;
    text-shadow: 1px 2px rgba(0, 0, 0, 0.6);
    // -webkit-text-stroke: 0.7px white;
    white-space: nowrap;
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    .banner-swiper-img {
      height: 1200px;
    }
    .banner-swiper-title {
      font-size: 180px;
    }
  }
}

.main-body {
  margin-top: -12px;
  .statistics {
    display: flex;
    justify-content: space-around;
    padding: 1.5% 0;
    margin: 0;
    background: #f5f5f5;

    &-item {
      list-style: none;
      font-size: 20px;
      color: #3d3d3d;

      &-box {
        &-num {
          & > span {
            text-shadow: #d1bfbf 1px 1px 1px;
            font-size: 32px;
            font-weight: 500;
            color: #cc0000;

            &:last-of-type {
              margin-left: 5px;
              font-size: 16px;
              color: #3d3d3d;
              text-shadow: none;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      .statistics-item {
        flex-basis: 50%;
        column-gap: 60px;
      }
    }
  }

  .solution {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-container {
      margin-top: 3.12vw;
      display: grid;
      grid-template-columns: repeat(3, 373px);
      grid-column-gap: 50px;
      grid-row-gap: 40px;

      .solution-container-item {
        position: relative;
        border-radius: 10px;
        height: 269px;
        width: 373px;
        cursor: pointer;

        &:hover {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: inherit;
            height: inherit;
            top: 0;
            left: 0;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.4);
          }
        }

        & > h4 {
          position: absolute;
          bottom: 10px;
          left: 40px;
          font-size: 24px;
          font-weight: normal;
          color: #ffffff;
          line-height: 24px;
        }
      }

      .solution-item-0 {
        background: url("@/assets/images/solution/solution0.jpg") no-repeat
          center/cover;
      }

      .solution-item-1 {
        background: url("@/assets/images/solution/solution1.png") no-repeat
          center/cover;
      }

      .solution-item-2 {
        background: url("@/assets/images/solution/solution2.jpg") no-repeat
          center/cover;
      }

      .solution-item-3 {
        background: url("@/assets/images/solution/solution3.png") no-repeat
          center/cover;
      }

      .solution-item-4 {
        background: url("@/assets/images/solution/solution4.png") no-repeat
          center/cover;
      }

      .solution-item-5 {
        background: url("@/assets/images/solution/solution5.png") no-repeat
          center/cover;
      }
    }
  }

  .news {
    &-container {
      margin-top: 3.12vw;
      margin-left: 110px;
    }
  }

  .culture {
    &-container {
      margin-top: 3.12vw;
    }
  }

  .Partner {
    &-container {
      margin-top: 3.12vw;
    }
  }

  section {
    padding: 4.98vw 0px 4.1vw;

    &:nth-of-type(even) {
      background: #f5f5f5;
    }

    & > strong {
      position: relative;
      font-size: 38px;
      line-height: 50px;

      &:after {
        content: "";
        background: rgba(51, 51, 51, 0.6);
        height: 6px;
        width: 24px;
        position: absolute;
        left: 50%;
        margin-left: -12px;
        bottom: -1.56vw;
      }
    }
  }
}
</style>
<style lang="scss">
.banner-swiper {
  .swiper-pagination-bullet-active {
    background: #fff !important;
    width: 20px !important;
    border-radius: 20px !important;
  }
}
</style>
