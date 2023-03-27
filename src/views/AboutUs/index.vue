<template>
  <div class="aboutus">
    <main>
      <section class="Introduction">
        <strong>团队介绍</strong>
        <p>
          团队立足重庆，积极拓展国内市场，在北京、天津、贵州、云南、西藏、内蒙古、新疆等地开展劳务合作和工程承包。创建了XXX、XXX等优质工程400多个。同时，团队以房地产开发为龙头实施产业延伸战略，开发的XXX、XXX等一大批高品质房地产项目，取得了良好的经济和社会效益，形成了以房屋建筑和房地产开发为主业的多元化经营格局，企业综合竞争力显著增强。
        </p>
        <p>
          团队将秉承“从道鼎新、富民兴业”的发展理念，立足重庆，面向全国，走向世界，为改进人类居住、生活和生产的基础设施提供高品质、高价值、系统化的建筑服务，时刻关注社会责任和环保问题，致力于推广可持续发展的建筑理念,不断超越客户、设计师、承包商和所在社区对我们的期望，努力成为中国建筑服务业的领先企业，我们相信，在团队协作、专业技能和客户满意度的共同驱动下，我们的建工团队将继续成长和发展。
        </p>
      </section>
      <section class="contact">
        <strong>联系我们</strong>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.aboutus {
  position: relative;
  background: url("@/assets/images/aboutus.jpg") no-repeat top;
  background-size: cover;
  overflow-y: auto;
}

main {
  // position: absolute;
  // top: 0;
  // left: 0;
  // background: #fff;
  // padding: 680px 0 4.1vw;

  section {
    padding: 4.1vw 300px 0;
    & > strong {
      position: relative;
      font-size: 38px;
      line-height: 50px;

      &:after {
        content: "";
        background: rgba(33, 53, 71, 0.8);
        height: 6px;
        width: 24px;
        position: absolute;
        left: 50%;
        margin-left: -12px;
        bottom: -1.56vw;
      }
    }
  }

  .Introduction {
    p {
      &:first-of-type {
        margin-top: 3.12vw;
      }
      color: #333333;
      text-indent: 2em;
      text-align: left;
      word-break: break-all;
      font-size: 16px;
    }
  }
}
</style>
