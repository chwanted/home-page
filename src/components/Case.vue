<template>
  <div class="Case-container">
    <div
      v-for="(item, index) in caseList"
      :class="`Case-container-item ${index && 'fadeInUp1'}`"
      :key="index"
    >
      <div :class="`Case-item-bck${index} Case-item-bck`">
        <div
          :class="`Case-item-info${index} Case-item-info ${
            index && 'fadeInUp1'
          }`"
        >
          {{ item.info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const caseList = [
  {
    info: "对各类房屋建筑及其附属设施的建造和与其配套的线路的安装活动所形成的工程实体。",
  },
  {
    info: "对维修进度、过程进行监督，促进工作进展, 并对维修后的结果进行检查做好记录。",
  },
  {
    info: "业务包括建筑幕墙技术开发、建筑幕墙工程、建筑装饰装修工程、钢结构工程。",
  },
];
</script>

<style lang="scss" scoped>
.Case-container {
  padding: 0 300px;
  @media screen and (max-width: 768px) {
    padding: 0 100px;
    margin-bottom: 4.1vw;
  }

  &-item {
    position: relative;
    height: 40vh;
    width: 100%;

    @media screen and (max-width: 768px) {
      height: 20vh;
    }
  }

  .Case-item-bck {
    position: absolute;
    height: 80%;
    width: 80%;
    bottom: 0;

    .Case-item-info {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 50px;
      width: 200px;
      height: 10vh;
      background: #fff;
      border-radius: 10px;
      color: #666;
      font-size: 16px;
      text-align: left;
      text-indent: 2em;
      box-shadow: 0px 4px 14px 0px rgba(204, 213, 222, 0.5);

      @media screen and (max-width: 768px) {
        height: 5vh;
        width: 400px;
        font-size: 32px;
      }
    }

    .Case-item-info0,
    .Case-item-info2 {
      left: -20%;
    }

    .Case-item-info1 {
      right: -20%;
    }
  }

  .Case-item-bck0 {
    right: 0;
    background: url("@/assets/images/business/business1.jpg") no-repeat center /
      cover;
  }
  .Case-item-bck1 {
    left: 0;
    background: url("@/assets/images/business/business2.jpg") no-repeat center /
      cover;
  }

  .Case-item-bck2 {
    right: 0;
    background: url("@/assets/images/business/business3.jpg") no-repeat center /
      cover;
  }

  @-webkit-keyframes fadeInUp1 {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInUp1 {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }
  .fadeInUp1 {
    -webkit-animation-name: fadeInUp1;
    animation-name: fadeInUp1;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
  }
}
</style>
