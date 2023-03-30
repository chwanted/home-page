<template>
  <div class="partner">
    <Swiper
      :modules="Modules"
      :slidesPerView="7"
      :loop="true"
      :speed="2500"
      :autoplay="{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }"
      class="partner-swiper swiper-no-swiping"
    >
      <SwiperSlide v-for="(item, index) in partnerList" :key="index">
        <img :src="item" class="partner-img" />
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="Modules"
      :slidesPerView="7"
      :loop="true"
      :speed="2500"
      :autoplay="{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }"
      class="partner-swiper swiper-no-swiping swiper-second"
    >
      <SwiperSlide v-for="(item, index) in partnerList" :key="index"
        ><img :src="item" class="partner-img" />
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="Modules"
      :slidesPerView="7"
      :loop="true"
      :speed="2500"
      :autoplay="{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }"
      class="partner-swiper swiper-no-swiping"
    >
      <SwiperSlide v-for="(item, index) in partnerList" :key="index"
        ><img :src="item" class="partner-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import partner1 from "@/assets/images/partner/partner1.png";
import "swiper/css";
import "swiper/css/bundle";

const Modules = [Autoplay];
const partnerList = [
  partner1,
  partner1,
  partner1,
  partner1,
  partner1,
  partner1,
  partner1,
];
</script>

<style lang="scss" scoped>
.partner {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 212px;
    top: 0;
    right: 0;
    margin-top: 0;
    z-index: 1;
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      #ffffff 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 212px;
    top: 0;
    left: 0;
    margin-top: 0;
    z-index: 2;
    background: linear-gradient(
      90deg,
      #ffffff 0%,
      #ffffff 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .swiper-second {
    left: 90px;
  }

  :deep(.partner-swiper) {
    padding: 15px 0;
    .swiper-slide {
      width: 254.714px;
      margin-right: 20px;
      box-shadow: 0px 4px 14px 0px rgba(204, 213, 222, 0.5);
      border-radius: 4px;
      overflow: hidden;
      height: auto;

      .partner-img {
        object-fit: cover;
        max-width: 100%;
        width: 100%;
        height: 93px;
      }
    }
  }
}
</style>

<style lang="scss">
.swiper-wrapper {
  -webkit-transition-timing-function: linear !important; /*之前是ease-out*/
  -moz-transition-timing-function: linear !important;
  -ms-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>
