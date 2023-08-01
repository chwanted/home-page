<template>
  <Swiper
    :modules="[Autoplay]"
    :loop="true"
    :slides-per-view="6"
    direction="vertical"
    :space-between="10"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    class="business-swiper"
  >
    <SwiperSlide v-for="(item, index) in businessList" :key="index">
      <div
        :class="[
          'business-swiper-item',
          item.k5 && 'blue-business-swiper-item',
        ]"
      >
        <div class="business-swiper-item-k1">{{ item.k1 }}</div>
        <div class="business-swiper-item-k2">{{ item.k2 }}</div>
        <div class="business-swiper-item-k3">{{ item.k3 }}</div>
        <div class="business-swiper-item-k4">{{ item.k4 }}</div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";
import { businessList } from "../common/data";
</script>

<style lang="scss" scoped>
.business-swiper {
  width: 100%;
  height: 500px;
  @media screen and (max-width: 768px) {
    height: 700px;
    .business-swiper-item {
      padding: 20px 30px;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    padding: 0 20px;

    height: 100%;
    border-radius: 10px;
    text-align: left;
    font-size: 18px;
    background-color: #4646460c;

    &-k1 {
      flex-basis: 29%;
    }
    &-k2 {
      flex-basis: 15%;
    }
    &-k3 {
      flex: 1;
    }
    &-k4 {
      flex-basis: 10%;
    }
  }

  .blue-business-swiper-item {
    background-color: rgba(0, 146, 243, 0.11);
  }
}
</style>
