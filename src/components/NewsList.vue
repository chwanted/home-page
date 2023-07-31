<template>
  <Swiper
    :modules="Modules"
    slidesPerView="3"
    :initialSlide="0"
    navigation
    class="news-swiper"
    :autoplay="{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }"
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
  <div class="news-mobile">
    <div
      class="news-mobile-item"
      v-for="(item, index) in newsList"
      :key="index"
      @click="toDetail(item.id)"
    >
      <div class="news-content">
        <div class="news-content-title">{{ item.title }}</div>
        <div class="news-content-summary">{{ item.summary }}</div>
        <div class="news-content-date">{{ item.date }} | {{ item.source }}</div>
      </div>
      <img :src="item.img" />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
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
  @media screen and (max-width: 768px) {
    display: none;
  }
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
    border-bottom: 1px solid rgb(5, 39, 175, 0.2);
    cursor: pointer;
  }

  .learn-more {
    padding: 0 20px;
    line-height: 48px;
    height: 48px;
    width: 120px;
    color: rgb(5, 39, 175);
    border: 1px solid rgb(5, 39, 175);
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
      background: rgb(5, 39, 175);
      color: #fff;

      & > span {
        &:last-of-type {
          display: inline-block;
        }
      }
    }
  }
}

.news-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    .news-mobile-item {
      display: flex;
      margin-top: 2vh;

      &:first-of-type {
        margin-top: 5vh;
      }

      .news-content {
        flex: 1;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        margin-right: 30px;

        &-title {
          width: 100%;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1; /* 这里是超出几行省略 */
          overflow: hidden;
          font-size: 80px;
          font-weight: 400;
          color: #333;
        }

        &-summary {
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 这里是超出几行省略 */
          overflow: hidden;
          font-size: 54px !important;
          color: #666;
        }

        &-date {
          color: #999;
          font-size: 54px !important;
        }
      }

      & > img {
        width: 40%;
        height: 13vh;
        object-fit: cover;
        object-position: 19%;
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
    color: rgb(5, 39, 175);
  }

  .swiper-button-next {
    right: 40px;
  }

  .swiper-button-disabled {
    display: none;
  }
}
</style>
