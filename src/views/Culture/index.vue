<template>
  <div class="culture-header">
    <img :src="culture" class="culture-header-banner" />
    <p>
      企业精神是企业在生产经营活动中，为谋求自身的生存和发展而长期形成的，并为职工群众所认同的先进群体意识。它是对企业现有的观念意识、处事原则、行为方式中的积极因素，特别是对重大标志性工程建设中表现出来的精神风貌的总结和提炼，同时又体现与时俱进，反映与广受赞誉的建筑全生命周期服务商相适应的职工素质要求。
    </p>
  </div>
  <main>
    <section class="culture-intro">
      <h2>企业精神</h2>
      <p>
        企业精神是企业在生产经营活动中，为谋求自身的生存和发展而长期形成的，并为职工群众所认同的先进群体意识。它是对企业现有的观念意识、处事原则、行为方式中的积极因素，特别是对重大标志性工程建设中表现出来的精神风貌的总结和提炼，同时又体现与时俱进，反映与广受赞誉的建筑全生命周期服务商相适应的职工素质要求。
      </p>
    </section>
  </main>
</template>

<script setup>
import culture from "@/assets/images/Culture.jpg";
</script>

<style lang="scss" scoped>
.culture-header {
  position: relative;

  &-banner {
    height: 1400px;
    width: 100%;
    filter: blur(0.1vw);
    background-attachment: fixed;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height: 800px;
    }

    @media screen and (min-width: 768px) and (max-width: 996px) {
      height: 1000px;
    }
  }

  p {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-indent: 2em;
    word-break: break-all;
    font-size: 44px;
    text-align: left;

    @media screen and (max-width: 768px) {
      display: none;
    }

    @media screen and (min-width: 768px) and (max-width: 996px) {
      font-size: 40px;
    }
  }
}

main {
  .culture-intro {
    margin: 0 300px;
    display: none;
    color: #333333;

    h2 {
      text-align: center;
    }

    p {
      text-indent: 2em;
      text-align: left;
      word-break: break-all;
      font-size: 40px;
    }

    @media screen and (max-width: 768px) {
      display: block;
      margin: 0 100px;
    }
  }
}
</style>
