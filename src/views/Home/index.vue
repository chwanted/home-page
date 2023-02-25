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
        <p className="banner-swiper-title">{{ item.title }}</p>
      </div>
    </SwiperSlide>
  </Swiper>

  <main class="main-body">
    <section class="statistics">
      <ul>
        <li
          v-for="(item, index) in state.statisticsList"
          :key="index"
          class="statistics-item"
        >
          <div class="statistics-item-box">
            <VueAnimateNumber
              from="0"
              :to="item.num"
              :key="item.num"
              :format="formatNumber"
              duration="5000"
              ref="valueNumber"
            />
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import VueAnimateNumber from "vue-animate-number";
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
  statisticsList: [{ num: 1000 }, { num: 1000 }, { num: 1000 }, { num: 1000 }],
});

const formatNumber = (num) => {
  // 格式化数据
  return num;
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
    top: 90px;
    right: 250px;
    font-family: "LvJianDeXingKai";
    font-size: 164px;
    color: red;
    text-shadow: 2px 2px #777;
    -webkit-text-stroke: 1px white;
    white-space: nowrap;
    cursor: default;

    @media screen and (max-width: 768px) {
      top: 50%;
      left: 50%;
      right: 0;
      transform: translate(-50%, -50%);
      font-size: 74px;
    }

    @media screen and (min-width: 768px) and (max-width: 1039px) {
      top: 150px;
      right: 150px;
      font-size: 104px;
    }
  }
}

.main-body {
  margin-top: -12px;
  .statistics {
    padding: 2% 0;
    background: #f5f5f5;

    & > ul {
      display: flex;
      overflow: hidden;

      & > li {
        list-style: none;
      }
    }
  }
}
</style>
