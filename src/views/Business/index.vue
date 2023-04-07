<template>
  <div class="Business">
    <div class="banner">
      <div class="banner-rect">
        <div class="banner-title">
          <span>业内排行</span><span>水平标准</span>
          <p>
            团结勤奋、诚信感恩、务实奉献、开拓创新，对工程负责，以诚信赢取客户，以精品树品牌，以管理出效益，以创新促发展。
          </p>
        </div>
      </div>
    </div>

    <Case />

    <section class="distribution">
      <strong>项目分布</strong>
      <div class="distribution-container">
        <Map />
      </div>
    </section>
  </div>
</template>

<script setup>
import Case from "@/components/Case.vue";
import Map from "@/components/Map.vue";
</script>

<style lang="scss" scoped>
.Business {
  .banner {
    position: relative;
    width: 100vw;
    height: 500px;
    background: url("@/assets/images/business.png") no-repeat;
    background-size: cover;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      height: 1100px;
    }

    &-rect {
      position: absolute;
      width: 708px;
      height: 172px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("@/assets/images/rect.png") no-repeat;
      background-size: contain;
    }

    &-title {
      position: absolute;
      top: -30%;
      left: 50%;
      transform: translateX(-50%);
      width: inherit;
      @media screen and (max-width: 768px) {
        top: 50%;
        transform: translate(-50%, -50%);
      }

      & > span {
        white-space: nowrap;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 60px;
        font-weight: 800;
        color: #fff;
        &:last-of-type {
          color: rgb(210, 136, 136);
        }
        @media screen and (max-width: 768px) {
          font-size: 68px;
        }
      }

      & > p {
        margin: 5% auto;
        text-align: center;
        width: 80%;
        line-height: 1.5;
        font-size: 14px;
        color: #fff;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  section {
    background: #fff;
    padding: 4.1vw 300px 0;

    @media screen and (max-width: 768px) {
      padding: 4.1vw 100px 0;
      strong {
        font-size: 84px !important;
        &:after {
          width: 101px !important;
          height: 10px !important;
        }
      }
    }

    & > strong {
      background: #fff;
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

  .distribution {
    padding-bottom: 4.1vw;
    &-container {
      margin-top: 5vh;
    }
  }
}
</style>
