<template>
  <main class="main-body">
    <div class="main-body-top">
      <div class="main-body-top-swiper">
        <div
          v-bind:class="['swiper-bck', `swiper-bck${state.bannerIndex}`]"
        ></div>
        <Swiper
          :modules="bannerModules"
          :slidesPerView="1"
          :initialSlide="bannerIndex"
          :loop="true"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
          :autoplay="{
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }"
          class="banner-swiper"
        >
          <SwiperSlide v-for="(item, index) in bannerList" :key="index">
            <img class="banner-swiper-img" :src="item.img" />
            <div class="banner-swiper-title">{{ item.title }}</div>
          </SwiperSlide>
        </Swiper>
      </div>

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
                duration="3500"
              ></CountTo>
              <span v-if="item.more">+</span>
              <span>{{ item.unit }}</span>
            </div>
            <div class="statistics-item-box-label">{{ item.label }}</div>
          </div>
        </li>
      </ul>
    </div>

    <section class="solution">
      <strong>各产业解决方案</strong>
      <div class="solution-container">
        <div
          v-bind:class="['solution-container-item', `solution-item-${index}`]"
          v-for="(item, index) in solutionList"
          :key="index"
          @click="toPage()"
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
import { useRouter } from "vue-router";
import { Autoplay, Pagination } from "swiper";
import { solutionList, bannerList, newsList } from "../../common/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CountTo } from "vue3-count-to";
import Partner from "@/components/Partner.vue";
import NewsList from "@/components/NewsList.vue";
import "swiper/css/pagination";
import "swiper/css";

const router = useRouter();
const bannerModules = [Autoplay, Pagination];
const state = reactive({
  bannerIndex: 0,
  numberList: [
    { num: 328, label: "服务客户", unit: "家", more: false },
    { num: 512, label: "交付项目", unit: "个", more: false },
    { num: 43200, label: "建工面积", unit: "㎡", more: true },
    { num: 3000, label: "团队成立", unit: "天", more: true },
  ],
});
const onSlideChange = (props) => {
  state.bannerIndex = props.realIndex;
};

const toPage = () => {
  router.push({ path: "/Business" });
};
</script>

<style lang="scss" scoped>
@import "@/assets/font/font.css";

.main-body {
  &-top {
    display: flex;
    flex-direction: column;
    height: 102vh;
    max-height: 1090px;
    @media screen and (max-width: 768px) {
      max-height: 1390px;
    }

    &-swiper {
      position: relative;
      flex: 1;
      width: 100vw;
      overflow: hidden;
    }

    .swiper-bck {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      max-height: 1080px;
      transform: scale(1.05);
      filter: blur(0.2vw);
      @media screen and (max-width: 768px) {
        max-height: 1280px;
      }
    }

    .swiper-bck0 {
      background: url("@/assets/images/banner/banner2.jpg") no-repeat
        center/cover;
    }

    .swiper-bck1 {
      background: url("@/assets/images/banner/banner1.jpg") no-repeat
        center/cover;
    }

    .swiper-bck2 {
      background: url("@/assets/images/banner/banner3.jpg") no-repeat
        center/cover;
    }

    .banner-swiper {
      position: absolute;
      top: 18.5%;
      left: 0;
      height: 63.55vh;
      max-height: 705px;
      width: 100vw;
      z-index: 2;

      @media screen and (max-width: 768px) {
        max-height: 1050px;
      }

      .swiper-wrapper {
        .swiper-slide {
          position: relative;
          overflow: hidden;
        }
      }

      &-img {
        height: inherit;
        width: inherit;
        object-fit: cover;
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

      // @media screen and (max-width: 768px) {
      //   .banner-swiper-img {
      //     height: 1200px;
      //   }
      //   .banner-swiper-title {
      //     font-size: 180px;
      //   }
      // }
    }
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
        cursor: default;
        @media screen and (max-width: 768px) {
          font-size: 34px !important;
        }

        &-box {
          &-num {
            & > span {
              text-shadow: #d1bfbf 1px 1px 1px;
              font-size: 32px;
              font-weight: 500;
              color: #cc0000;

              @media screen and (max-width: 768px) {
                font-size: 64px !important;
              }

              &:last-of-type {
                margin-left: 5px;
                font-size: 16px;
                color: #3d3d3d;
                text-shadow: none;

                @media screen and (max-width: 768px) {
                  font-size: 32px !important;
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .statistics-item {
          flex-basis: 50%;
        }
      }
    }
  }
  .solution {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-container {
      margin-top: 5vh;
      display: grid;
      grid-template-columns: repeat(3, 373px);
      grid-column-gap: 50px;
      grid-row-gap: 40px;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 523px);
        grid-row-gap: 50px;
      }

      .solution-container-item {
        position: relative;
        border-radius: 10px;
        height: 269px;
        width: 373px;

        cursor: pointer;

        @media screen and (max-width: 768px) {
          height: 369px;
          width: 523px;
        }

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

          @media screen and (max-width: 768px) {
            font-size: 48px !important ;
          }
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
      margin-top: 5vh;
      margin-left: 110px;

      @media screen and (max-width: 768px) {
        margin: 0 100px;
      }
    }
  }

  .culture {
    &-container {
      margin-top: 5vh;
    }
  }

  .Partner {
    &-container {
      margin-top: 5vh;
    }
  }

  section {
    padding: 4.98vw 0px 4.1vw;

    @media screen and (max-width: 768px) {
      strong {
        font-size: 84px !important;
        &:after {
          width: 101px !important;
          height: 10px !important;
        }
      }
    }

    &:nth-of-type(even) {
      background: #f5f5f5;
    }

    & > strong {
      position: relative;
      font-size: 35px;
      line-height: 50px;
      color: #333333;

      &:after {
        content: "";
        background: rgba(51, 51, 51, 0.6);
        height: 6px;
        width: 24px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.56vh;
      }
    }
  }
}
</style>
<style lang="scss">
.banner-swiper {
  overflow: visible;
  .swiper-pagination {
    bottom: -8%;
  }
  .swiper-pagination-bullet-active {
    background: #fff !important;
    width: 20px !important;
    border-radius: 20px !important;
  }
}
</style>
