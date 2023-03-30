<template>
  <Swiper
    :modules="Modules"
    slidesPerView="3"
    :initialSlide="0"
    navigation
    class="news-swiper"
  >
    <SwiperSlide v-for="(item, index) in newsList" :key="index">
      <div class="news-swiper-item">
        <div class="news-swiper-img" @click="toDetail(item.id)">
          <img :src="item.img" />
        </div>
        <strong class="news-swiper-title" @click="toDetail(item.id)">{{
          item.title
        }}</strong>
        <div class="learn-more" @click="toDetail(item.id)">
          <span>了解更多</span><span>→</span>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import "swiper/css/navigation";
import "swiper/css";

const router = useRouter();
const props = defineProps({
  newsList: [],
});
const { newsList } = toRefs(props);
const Modules = [Autoplay, Navigation];

const toDetail = (id) => {
  router.push({ path: "/News-Detail", query: { id } });
};
</script>

<style lang="scss" scoped>
.news-swiper {
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
      background: #981919;
      color: #fff;

      & > span {
        &:last-of-type {
          display: inline-block;
        }
      }
    }
  }
}
</style>

<style lang="scss">
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
