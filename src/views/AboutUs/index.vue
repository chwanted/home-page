<template>
  <img :src="aboutus" class="about-us" />
  <main>
    <section class="Introduction">
      <h2>团队介绍</h2>
      <p>
        团队立足重庆，积极拓展国内市场，在北京、天津、贵州、云南、西藏、内蒙古、新疆等地开展劳务合作和工程承包。创建了XXX、XXX等优质工程400多个。同时，团队以房地产开发为龙头实施产业延伸战略，开发的XXX、XXX等一大批高品质房地产项目，取得了良好的经济和社会效益，形成了以房屋建筑和房地产开发为主业的多元化经营格局，企业综合竞争力显著增强。
      </p>
      <p>
        团队将秉承“从道鼎新、富民兴业”的发展理念，立足重庆，面向全国，走向世界，为改进人类居住、生活和生产的基础设施提供高品质、高价值、系统化的建筑服务，不断超越客户、设计师、承包商和所在社区对我们的期望，努力成为中国建筑服务业的领先企业，服务全球。
      </p>
    </section>
    <section class="contact">
      <h2>联系我们</h2>
    </section>
  </main>
</template>

<script setup>
import aboutus from "@/assets/images/aboutus.jpg";
</script>

<style lang="scss" scoped>
.about-us {
  height: 680px;
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }
}

main {
  section {
    margin: 0 300px;
    h2 {
      color: #333333;
    }

    @media screen and (max-width: 768px) {
      margin: 0 100px;
    }
  }

  .Introduction {
    p {
      color: #333333;
      text-indent: 2em;
      text-align: left;
      word-break: break-all;
      font-size: 16px;
    }
  }
}
</style>
