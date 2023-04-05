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
      <SwiperSlide v-for="(item, index) in partnerList1" :key="index">
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
      <SwiperSlide v-for="(item, index) in partnerList2" :key="index"
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
      <SwiperSlide v-for="(item, index) in partnerList3" :key="index"
        ><img :src="item" class="partner-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import partner1 from "@/assets/images/partner/partner1.png";
import partner2 from "@/assets/images/partner/partner2.jpg";
import partner3 from "@/assets/images/partner/partner3.png";
import partner4 from "@/assets/images/partner/partner4.png";
import partner5 from "@/assets/images/partner/partner5.jpg";
import partner6 from "@/assets/images/partner/partner6.jpg";
import partner7 from "@/assets/images/partner/partner7.png";
import partner8 from "@/assets/images/partner/partner8.jpg";
import partner9 from "@/assets/images/partner/partner9.jpg";
import partner10 from "@/assets/images/partner/partner10.png";
import partner11 from "@/assets/images/partner/partner11.png";
import partner12 from "@/assets/images/partner/partner12.png";
import partner13 from "@/assets/images/partner/partner13.png";
import partner14 from "@/assets/images/partner/partner14.jpg";
import partner15 from "@/assets/images/partner/partner15.jpg";
import partner16 from "@/assets/images/partner/partner16.png";
import partner17 from "@/assets/images/partner/partner17.jpg";
import partner18 from "@/assets/images/partner/partner18.jpg";
import partner19 from "@/assets/images/partner/partner19.jpg";
import partner20 from "@/assets/images/partner/partner20.jpg";
import partner21 from "@/assets/images/partner/partner21.jpg";
import "swiper/css";
import "swiper/css/bundle";

const Modules = [Autoplay];
const partnerList1 = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

const partnerList2 = [
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
];

const partnerList3 = [
  partner15,
  partner16,
  partner17,
  partner18,
  partner19,
  partner20,
  partner21,
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
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
      height: auto;

      .partner-img {
        object-fit: contain;
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
