<template>
  <Swiper
    :slidesPerView="1"
    :initialSlide="0"
    :loop="true"
    class="banner-swiper"
  >
    <SwiperSlide v-for="(item, index) in bannerList" :key="index">
      <div class="banner-swiper-item">
        <img class="banner-swiper-img" :src="item.img" />
        <div class="banner-swiper-title">{{ item.title }}</div>
      </div>
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
      <h1>各产业解决方案</h1>
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
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CountTo } from "vue3-count-to";
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
const bannerList = [
  { img: banner2, title: "团结奋斗 追求卓越" },
  { img: banner1, title: "敢于创新 超越自我" },
  { img: banner3, title: "求真务实 顽强拼搏" },
];
const solutionList = [
  { title: "房建施工" },
  { title: "市政路桥" },
  { title: "勘察设计" },
  { title: "机电安装" },
  { title: "装饰装修" },
  { title: "建材物流" },
];
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
    }
  }

  &-item {
    position: relative;
  }

  &-img {
    height: 680px;
    width: 100vw;
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
          top: 160px;
          left: 40px;
          font-size: 26px;
          font-weight: normal;
          color: #ffffff;
          line-height: 26px;
        }
      }

      .solution-item-0 {
        background: url("@/assets/images/solution0.jpg") no-repeat center/cover;
      }

      .solution-item-1 {
        background: url("@/assets/images/solution1.png") no-repeat center/cover;
      }

      .solution-item-2 {
        background: url("@/assets/images/solution2.jpg") no-repeat center/cover;
      }

      .solution-item-3 {
        background: url("@/assets/images/solution3.png") no-repeat center/cover;
      }

      .solution-item-4 {
        background: url("@/assets/images/solution4.png") no-repeat center/cover;
      }

      .solution-item-5 {
        background: url("@/assets/images/solution5.png") no-repeat center/cover;
      }
    }
  }
}
</style>
