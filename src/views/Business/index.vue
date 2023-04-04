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
    <!-- <Case /> -->
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
    background-position-y: 15%;
    overflow: hidden;

    &-rect {
      position: absolute;
      width: 708px;
      height: 172px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("@/assets/images/rect.png") no-repeat;
    }

    &-title {
      position: absolute;
      top: -30%;
      left: 50%;
      transform: translateX(-50%);
      width: inherit;

      & > span {
        white-space: nowrap;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 60px;
        font-weight: 800;
        color: #fff;
        &:last-of-type {
          color: rgb(210, 136, 136);
        }
      }

      & > p {
        margin: 5% auto;
        text-align: center;
        width: 80%;
        line-height: 1.5;
        font-size: 14px;
        color: #fff;
      }
    }
  }

  section {
    background: #fff;
    padding: 4.1vw 300px 0;
    & > strong {
      background: #fff;
      position: relative;
      font-size: 38px;
      line-height: 50px;

      &:after {
        content: "";
        background: rgba(51, 51, 51, 0.6);
        height: 6px;
        width: 24px;
        position: absolute;
        left: 50%;
        margin-left: -12px;
        bottom: -1.56vw;
      }
    }
  }

  .distribution {
    padding-bottom: 4.1vw;
    &-container {
      margin-top: 3.12vw;
    }
  }
}
</style>
