<template>
  <div class="Certification-container">
    <Swiper
      :modules="Modules"
      :centeredSlides="true"
      slidesPerView="auto"
      :loop="true"
      :space-between="50"
      :autoplay="{
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }"
      class="certification-swiper"
    >
      <SwiperSlide v-for="(item, index) in certificationList" :key="index">
        <img :src="item" class="certification-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import certificate1 from "@/assets/images/certificate/certificate1.jpg";
import certificate2 from "@/assets/images/certificate/certificate2.jpg";
import certificate3 from "@/assets/images/certificate/certificate3.png";
import certificate4 from "@/assets/images/certificate/certificate4.jpg";
import certificate5 from "@/assets/images/certificate/certificate5.png";
const certificationList = [
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
];
const Modules = [Autoplay];
</script>

<style lang="scss" scoped>
.Certification-container {
  :deep(.swiper) {
    .swiper-wrapper {
      align-items: center;
      .swiper-slide {
        width: auto !important;

        .certification-img {
          width: 327.7px;
          height: 189px;
          object-fit: cover;
          box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);

          @media screen and (max-width: 768px) {
            width: 761px;
            height: 389px;
          }
        }
      }

      .swiper-slide-active {
        .certification-img {
          height: 227px;

          @media screen and (max-width: 768px) {
            height: 527px;
          }
        }
      }
    }
  }
}
</style>
