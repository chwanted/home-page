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
            <img :src="team1" />
          </div>
          <div class="Intro-container-right">
            <div class="Intro-container-right-item" v-wave>
              我们不断追求创新，为客户提供最优质的解决方案，从而不断提升自身竞争力。
            </div>
            <div class="Intro-container-right-item" v-wave>
              我们拥有高素质的专业团队，致力于为客户提供最专业的建筑解决方案。
            </div>
            <div class="Intro-container-right-item" v-wave>
              我们承担企业社会责任，保证建筑质量和安全，并为员工和社会创造价值。
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import team1 from "@/assets/images/team/team1.jpg";
</script>

<style lang="scss" scoped>
.culture {
  width: 100vw;
  background: url("@/assets/images/Culture.jpg") #fff no-repeat;
  background-position-y: 10%;
  background-size: cover;
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
    padding-top: 500px;
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
      margin-bottom: 4.1vw;
      overflow: hidden;

      &-container {
        height: 300px;
        display: flex;
        align-items: center;

        &-left {
          margin-right: 30px;
          height: 300px;
          & > img {
            width: 500px;
            height: inherit;
            object-fit: cover;
          }
        }

        &-right {
          height: 100%;
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
            cursor: pointer;
            transform: perspective(1px) translateZ(0);

            &::before {
              content: "";
              position: absolute;
              z-index: -1;
              left: 0;
              right: 100%;
              bottom: 0;
              background: #cc0000;
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
  }
}
</style>

<style lang="scss" scoped></style>
