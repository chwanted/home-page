<template>
  <Swiper
    :slidesPerView="1"
    :initialSlide="0"
    :loop="true"
    className="banner-swiper"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :modules="[Autoplay, Pagination]"
  >
    <SwiperSlide v-for="(item, index) in bannerList" :key="index">
      <img className="banner-swiper-img" :src="item.img" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";

const bannerList = [
  { img: banner2, title: "团结奋斗 追求卓越" },
  { img: banner1, title: "敢于创新 超越自我" },
  { img: banner3, title: "求真务实 顽强拼搏" },
];
</script>

<style lang="scss" scoped>
.swiper-initialized {
  // margin-top: 80px;
}
.banner-swiper {
  width: 100%;

  .swiper-wrapper {
    .swiper-slide {
      // line-height: 400px;
      font-size: 30px;
      text-align: center;
    }
  }

  &-img {
    height: 800px;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      height: 300px;
    }

    @media screen and (min-width: 768px) and (max-width: 996px) {
      height: 600px;
    }
  }
}
</style>
