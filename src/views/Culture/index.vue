<template>
  <div class="culture">
    <main>
      <section class="Spirit">
        <strong>企业文化</strong>
        <div class="Spirit-container">
          <p>
            企业精神是企业在生产经营活动中，为谋求自身的生存和发展而长期形成的，并为职工群众所认同的先进群体意识。它是对企业现有的观念意识、处事原则、行为方式中的积极因素，特别是对重大标志性工程建设中表现出来的精神风貌的总结和提炼，同时又体现与时俱进，反映与广受赞誉的建筑全生命周期服务商相适应的职工素质要求。
          </p>
        </div>
      </section>

      <section class="Intro">
        <div class="Intro-container">
          <div class="Intro-container-left">
            <div class="Intro-title">企业介绍</div>
            <p>
              我们的建筑团队是一家致力于提供高品质、可持续发展建筑解决方案的企业。我们的企业文化是建立在以下几个核心价值观基础上：
            </p>
            <p>
              创新：我们不断追求创新，为客户提供最优质的解决方案，从而不断提升自身竞争力。
            </p>
            <p>
              专业：我们拥有高素质的专业团队，致力于为客户提供最专业的建筑解决方案。
            </p>
            <p>
              责任：我们承担企业社会责任，保证建筑质量和安全，并为员工和社会创造价值。
            </p>
            <p>
              协作：我们倡导团队合作，鼓励员工彼此协作，以实现企业的共同目标。
            </p>
            <p>
              诚信：我们坚守诚信原则，始终以公正、透明的态度处理企业和客户之间的关系。
            </p>
            <p>
              在我们的企业文化中，我们强调员工和客户的体验。我们鼓励员工不断学习和进步，为客户提供高品质的服务。我们相信，通过实践这些价值观，我们能够不断提升企业的声誉和价值，为客户和社会创造更多的价值。
            </p>
          </div>
          <div class="Intro-container-right"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.culture {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/images/Culture.jpg") #fff no-repeat top/cover;
  background-attachment: fixed;

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

  main {
    padding-top: 680px;
    background: transparent;

    .Spirit {
      overflow: hidden;

      &-container {
        margin-top: 3.12vw;
        p {
          color: #333333;
          text-indent: 2em;
          text-align: left;
          word-break: break-all;
          font-size: 16px;
        }
      }
    }

    .Intro {
      overflow: hidden;

      &-container {
        margin-top: 3.12vw;
        display: flex;

        &-left,
        &-right {
          flex: 1;
        }

        &-left {
          .Intro-title {
            font-size: 18px;
            text-align: start;
            font-weight: bold;
          }

          p {
            color: #333333;
            text-align: left;
            word-break: break-all;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
