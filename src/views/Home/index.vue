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
      <Swiper
        :modules="newsModules"
        slidesPerView="3"
        :initialSlide="0"
        navigation
        class="news-swiper"
      >
        <SwiperSlide v-for="(item, index) in newsList" :key="index">
          <div class="news-swiper-item">
            <div class="news-swiper-img"><img :src="item.img" /></div>
            <strong class="news-swiper-title">{{ item.title }}</strong>
            <div class="learn-more"><span>了解更多</span><span>→</span></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="culture">
      <strong>企业文化</strong>
      <div class="culture-container">
        <p>
          企业文化始终围绕“以人为本、追求卓越、诚信守信、关爱社会”的核心价值观展开，以“亲和力、执行力、创新力”作为公司的核心文化要素，贯穿于公司的各个方面。
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { Navigation, Autoplay, Pagination } from "swiper";
import { solutionList, bannerList, newsList } from "./data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CountTo } from "vue3-count-to";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
const bannerModules = [Autoplay, Pagination];
const newsModules = [Autoplay, Navigation];
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
    height: 680px;
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
    top: 17%;
    left: 0;
    height: 500px;
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
    &-swiper {
      margin: 3.12vw 0 0 110px;

      &-item {
        width: 480px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      &-img {
        width: inherit;
        height: 270px;
        overflow: hidden;
        cursor: pointer;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
          }
        }
      }

      &-title {
        height: 72px;
        width: 100%;
        padding-bottom: 1.66vw;
        margin: 1.45vw 0px 1.87vw;
        font-size: 24px;
        line-height: 36px;
        text-align: left;
        border-bottom: 1px solid rgba(152, 25, 25, 0.2);
        cursor: pointer;
      }

      .learn-more {
        padding: 0 20px;
        line-height: 48px;
        height: 48px;
        width: 120px;
        color: #981919;
        border: 1px solid rgba(152, 25, 25);
        font-size: 14px;
        display: inline-block;
        border-radius: 2.2em;
        cursor: pointer;

        & > span {
          display: inline-block;

          &:last-of-type {
            display: none;
          }
        }

        &:hover {
          display: flex;
          justify-content: space-between;
          transition: all 0.5s ease-in-out;

          & > span {
            &:last-of-type {
              display: inline-block;
            }
          }
        }
      }
    }
  }

  .culture {
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
        background: rgba(33, 53, 71, 0.8);
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

.news-swiper {
  overflow: visible;
  .swiper-button-prev {
    left: -70px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #981919;
  }

  .swiper-button-next {
    right: 40px;
  }

  .swiper-button-disabled {
    display: none;
  }
}
</style>
