<template>
  <Swiper
    :slidesPerView="1"
    :initialSlide="0"
    :loop="true"
    className="banner-swiper"
  >
    <SwiperSlide v-for="(item, index) in bannerList" :key="index">
      <div className="banner-swiper-item">
        <img className="banner-swiper-img" :src="item.img" />
        <div className="banner-swiper-title">{{ item.title }}</div>
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
const state = reactive({
  navIndex: 0,
  numberList: [
    { num: "328", label: "服务客户", unit: "家", more: false },
    { num: "512", label: "交付项目", unit: "个", more: false },
    { num: "43200", label: "建工面积", unit: "㎡", more: true },
    { num: "3000", label: "团队成立", unit: "天", more: true },
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
    height: 1400px;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      height: 800px;
    }

    @media screen and (min-width: 768px) and (max-width: 996px) {
      height: 1000px;
    }
  }

  &-title {
    position: absolute;
    top: 300px;
    right: 150px;
    font-family: "LvJianDeXingKai";
    font-size: 164px;
    color: red;
    text-shadow: 2px 2px #777;
    -webkit-text-stroke: 0.7px white;
    white-space: nowrap;
    cursor: default;

    @media screen and (max-width: 768px) {
      // display: none;
      width: 100vw;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 74px;
    }

    @media screen and (min-width: 768px) and (max-width: 1039px) {
      font-size: 114px;
    }
  }
}

.main-body {
  margin-top: -12px;
  .statistics {
    display: flex;
    justify-content: space-around;
    padding: 3% 0;
    margin: 0;
    background: #f5f5f5;

    &-item {
      list-style: none;
      font-size: 36px;
      color: #3d3d3d;

      &-box {
        &-num {
          & > span {
            text-shadow: #d1bfbf 3px 3px 1px;
            font-size: 54px;
            font-weight: 500;
            color: #cc0000;

            &:last-of-type {
              margin-left: 10px;
              font-size: 36px;
              color: #3d3d3d;
              text-shadow: none;
            }
          }
        }
      }
    }

    @media screen and (max-width: 520px) {
      flex-wrap: wrap;

      &-item {
        flex-basis: 50%;
        row-gap: 20px;
      }
    }
  }
}
</style>
