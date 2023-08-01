<template>
  <main class="main-body">
    <div class="main-body-top">
      <Swiper
        :modules="bannerModules"
        :slidesPerView="1"
        :initialSlide="bannerIndex"
        :loop="true"
        :pagination="{ clickable: true }"
        @slideChange="onSlideChange"
        :autoplay="{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }"
        class="banner-swiper"
      >
        <SwiperSlide v-for="(item, index) in bannerList" :key="index">
          <img class="banner-swiper-img" :src="item.img" />
          <div class="banner-swiper-title">{{ item.title }}</div>
        </SwiperSlide>
      </Swiper>

      <ul class="statistics">
        <li
          v-for="(item, index) in state.numberList"
          :key="index"
          class="statistics-item"
        >
          <div class="statistics-item-box">
            <div class="statistics-item-box-num">
              <CountTo
                :startVal="1000"
                :endVal="item.num"
                duration="2000"
              ></CountTo>
              <span v-if="item.more">+</span>
              <span>{{ item.unit }}</span>
            </div>
            <div class="statistics-item-box-label">{{ item.label }}</div>
          </div>
        </li>
      </ul>
    </div>

    <section class="business" id="business">
      <strong>核心业务</strong>
      <div class="business-container">
        <div class="business-container-left">
          <BusinessList />
        </div>
        <div class="business-container-right">
          <Map />
        </div>
      </div>
    </section>

    <section class="solution" id="solution">
      <strong>优秀案例</strong>
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

    <section class="culture" id="culture">
      <strong>企业文化</strong>
      <div class="culture-container">
        <div class="culture-container-left">
          <video
            :src="media1"
            playsinline="true"
            controls
            class="culture-container-left-item"
          />
        </div>
        <div class="culture-container-right">
          <div class="culture-container-right-item" v-wave>
            成功需要好的准备。
          </div>
          <div class="culture-container-right-item" v-wave>
            成功是一种付出的象征。
          </div>
          <div class="culture-container-right-item" v-wave>
            成功需要团队的共同努力。
          </div>
        </div>
      </div>
    </section>

    <section class="aboutUs" id="aboutUs">
      <strong>发展历程</strong>
      <div class="aboutUs-container">
        <p>
          自2008年起，我们承包了大钢模工程，并在北京通州、大兴、秦皇岛、燕郊等多个地区承接人工项目。其中，我们还参与了北京通州《闽建集团》高档写字楼的建设，该写字楼高达5.45米层高。在应对多个班组轮换的情况下，我们积极参与并完成了该项目的一期、二期和三期工程。我们以专业的技术和全力以赴的工作态度，致力于为客户创造卓越的建筑工程成果。
        </p>
        <p>
          2014年，我们准确洞察建筑市场需求，成功转型并专注于定型化铝模板领域。在这一领域，我们取得了多项令人瞩目的代表性项目，彰显了我们在建筑行业的卓越实力。其中，广州《星汇湾》、武汉《龙湖滨江天街》《武汉中铁》等项目都是我们引以为豪的代表作品。同时，我们还在浙江的《海州上城》和《龙湖中德·舜山府》，以及新疆的《天山府》和河北的《尚府壹号》等地区展现了卓越的建筑技艺和优秀的项目管理能力。这些成功的项目不仅证明了我们对市场需求的准确洞察，更彰显了我们在定型化铝模板领域的卓越创新和不断超越的精神。
        </p>
        <Certification />
        <p>
          在过去的2019年至2022年期间，我们荣幸地与众多知名地产企业合作，包括碧桂园、中建、北京城建、中德天城、金茂、万科、中海、金地、利祥地产等，彰显出我们在建筑行业的卓越表现。在这一时期，我们以卓越的劳务质量和员工表现，屡次荣获各大企业评选的殊荣，包括《优秀劳务》、《优秀员工》、《先进集体》、《安建双星》等荣誉。这些奖项是对我们专业团队不断努力和奉献的肯定，也展现了我们与众不同的优势。我们为这四年间每年在展开面积达到30万至100万平方的项目取得了卓越成绩感到自豪。尤其值得一提的是，在全球范围遭遇“白色口罩”的挑战下，我们始终坚持“负重前行”，为客户提供出色的单项木工劳务，创造了超过一亿人民币的巨大产值。这一连串的成功和荣誉，源自我们团结拼搏、追求卓越的团队精神，以及始终将客户满意放在首位的坚定承诺。我们将继续努力，不断创新，为更多客户提供卓越的服务和解决方案，开创更加辉煌的未来。
        </p>
      </div>
    </section>

    <!-- <section class="news" id="news">
      <strong>新闻资讯</strong>
      <div class="news-container"><NewsList :newsList="newsList" /></div>
    </section> -->

    <section class="Partner" id="partner">
      <strong>合作伙伴</strong>
      <div class="Partner-container"><Partner /></div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Autoplay, Pagination } from "swiper";
import { solutionList, bannerList, newsList } from "../../common/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { CountTo } from "vue3-count-to";
import Map from "@/components/Map.vue";
import media1 from "@/assets/images/media.mp4";
import Partner from "@/components/Partner.vue";
import NewsList from "@/components/NewsList.vue";
import Certification from "@/components/Certification.vue";
import BusinessList from "@/components/BusinessList.vue";
import "swiper/css/pagination";
import "swiper/css";

const router = useRouter();
const bannerModules = [Autoplay, Pagination];
const state = reactive({
  bannerIndex: 0,
  numberList: [
    { num: 10000, label: "创造产值", unit: "万元", more: true },
    { num: 10, label: "承接项目", unit: "个", more: true },
    { num: 800, label: "建工面积", unit: "万㎡", more: true },
    { num: 5000, label: "团队成立", unit: "天", more: true },
  ],
});

const onSlideChange = (props) => {
  state.bannerIndex = props.realIndex;
};

const toPage = () => {
  router.push({ path: "/Business" });
};
</script>

<style lang="scss" scoped>
@import "@/assets/font/font.css";

.main-body {
  &-top {
    display: flex;
    flex-direction: column;
    height: 102vh;
    max-height: 1090px;
    @media screen and (max-width: 768px) {
      max-height: 1390px;
    }

    // &-swiper {
    //   position: relative;
    //   flex: 1;
    //   width: 100vw;
    //   overflow: hidden;
    // }

    // .swiper-bck {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 1;
    //   width: 100vw;
    //   height: 100vh;
    //   max-height: 1080px;
    //   transform: scale(1.05);
    //   filter: blur(0.2vw);
    //   @media screen and (max-width: 768px) {
    //     max-height: 1280px;
    //   }
    // }

    // .swiper-bck0 {
    //   background: url("@/assets/images/banner/banner2.jpg") no-repeat
    //     center/cover;
    // }

    // .swiper-bck1 {
    //   background: url("@/assets/images/banner/banner1.jpg") no-repeat
    //     center/cover;
    // }

    // .swiper-bck2 {
    //   background: url("@/assets/images/banner/banner3.jpg") no-repeat
    //     center/cover;
    // }

    .banner-swiper {
      // position: absolute;
      // top: 18.5%;
      // left: 0;
      height: 87.55vh;
      max-height: 1005px;
      // height: 63.55vh;
      // max-height: 705px;
      width: 100vw;
      // z-index: 2;

      @media screen and (max-width: 768px) {
        // max-height: 1050px;
      }

      .swiper-wrapper {
        .swiper-slide {
          position: relative;
          overflow: hidden;
        }
      }

      &-img {
        height: inherit;
        width: inherit;
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

      // @media screen and (max-width: 768px) {
      //   .banner-swiper-img {
      //     height: 1200px;
      //   }
      //   .banner-swiper-title {
      //     font-size: 180px;
      //   }
      // }
    }
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
        cursor: default;
        @media screen and (max-width: 768px) {
          font-size: 34px !important;
        }

        &-box {
          &-num {
            & > span {
              text-shadow: rgb(170, 173, 185) 1px 1px 1px;
              font-size: 32px;
              font-weight: 500;
              color: rgb(5, 39, 175);

              @media screen and (max-width: 768px) {
                font-size: 64px !important;
              }

              &:last-of-type {
                margin-left: 5px;
                font-size: 16px;
                color: #3d3d3d;
                text-shadow: none;

                @media screen and (max-width: 768px) {
                  font-size: 32px !important;
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .statistics-item {
          flex-basis: 50%;
        }
      }
    }
  }
  .solution {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-container {
      margin-top: 5vh;
      display: grid;
      grid-template-columns: repeat(3, 373px);
      grid-column-gap: 50px;
      grid-row-gap: 40px;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 523px);
        grid-row-gap: 50px;
      }

      .solution-container-item {
        position: relative;
        border-radius: 10px;
        height: 269px;
        width: 373px;

        // cursor: pointer;

        @media screen and (max-width: 768px) {
          height: 369px;
          width: 523px;
        }

        // &:hover {
        //   position: relative;
        //   &::before {
        //     content: "";
        //     position: absolute;
        //     width: inherit;
        //     height: inherit;
        //     top: 0;
        //     left: 0;
        //     border-radius: 10px;
        //     background: rgba(0, 0, 0, 0.4);
        //   }
        // }

        & > h4 {
          position: absolute;
          bottom: 10px;
          left: 40px;
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;

          @media screen and (max-width: 768px) {
            font-size: 48px !important ;
          }
        }
      }

      .solution-item-0 {
        background: url("@/assets/images/solution/solution0.jpg") no-repeat
          center/cover;
      }

      .solution-item-1 {
        background: url("@/assets/images/solution/solution1.jpg") no-repeat
          center/cover;
      }

      .solution-item-2 {
        background: url("@/assets/images/solution/solution2.jpg") no-repeat
          center/cover;
      }

      .solution-item-3 {
        background: url("@/assets/images/solution/solution3.jpg") no-repeat
          center/cover;
      }

      .solution-item-4 {
        background: url("@/assets/images/solution/solution4.jpg") no-repeat
          center/cover;
      }

      .solution-item-5 {
        background: url("@/assets/images/solution/solution5.jpg") no-repeat
          center/cover;
      }
    }
  }

  .news {
    &-container {
      margin-top: 5vh;
      margin-left: 110px;

      @media screen and (max-width: 768px) {
        margin: 0 100px;
      }
    }
  }

  .business {
    &-container {
      margin-top: 5vh;
      padding: 0 15.625vw;
      display: flex;

      @media screen and (max-width: 768px) {
        display: block;
        padding: 0 9vw;
        .business-container-left {
          margin-bottom: 2vh;
        }
      }

      &-left {
        flex: 1;
      }
      &-right {
        flex: 1;
        margin-left: 30px;
      }
    }
  }

  .culture {
    &-container {
      margin-top: 5vh;
      padding: 0 15.625vw;
      display: flex;

      @media screen and (max-width: 768px) {
        height: unset;
        display: block;
        padding: 0 9vw;

        .culture-container-left {
          height: 50vw;
          margin-right: 0px;
          margin-bottom: 30px;
          &-item {
            width: 100%;
          }
        }

        .culture-container-right {
          &-item {
            margin-bottom: 30px;
          }
        }
      }

      &-left {
        flex: 1;
        margin-right: 30px;
        height: 300px;
        align-self: center;
        &-item {
          width: 100%;
          height: inherit;
        }
      }

      &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-item {
          text-align: left;
          background-color: #f5f5f5;
          padding: 3.85% 5%;
          position: relative;
          color: #464646;
          font-size: 18px;
          cursor: pointer;
          transform: perspective(1px) translateZ(0);

          &::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            bottom: 0;
            background: rgb(5, 39, 175);
            height: 4px;
            -webkit-transition-property: right;
            transition-property: right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }

          &:hover {
            &::before {
              right: 0;
            }
          }
        }
      }
    }
  }

  .Partner {
    &-container {
      margin-top: 5vh;
    }
  }

  .aboutUs {
    &-container {
      margin-top: 5vh;
      padding: 0 15.625vw;
      .Certification-container {
        margin-bottom: 3vh;
      }
      @media screen and (max-width: 768px) {
        padding: 0 9vw;
      }
      p {
        color: #333333;
        text-indent: 2em;
        text-align: left;
        word-break: break-all;
        font-size: 18px;
      }

      .Certification-container {
        margin-top: 5vh;
      }
    }
  }

  section {
    padding: 4.98vw 0px 4.1vw;

    @media screen and (max-width: 768px) {
      strong {
        font-size: 84px !important;
        &:after {
          width: 101px !important;
          height: 10px !important;
        }
      }
    }

    &:nth-of-type(even) {
      background: #f5f5f5;
    }

    & > strong {
      position: relative;
      font-size: 35px;
      line-height: 50px;
      color: #333333;

      &:after {
        content: "";
        background: rgba(51, 51, 51, 0.6);
        height: 6px;
        width: 24px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.56vh;
      }
    }
  }
}
</style>
<style lang="scss">
.banner-swiper {
  overflow: visible;
  .swiper-pagination {
    // bottom: -8%;
  }
  .swiper-pagination-bullet-active {
    background: #fff !important;
    width: 20px !important;
    border-radius: 20px !important;
  }
}
</style>
