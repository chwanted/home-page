<template>
  <div class="aboutus">
    <main>
      <section class="Introduction">
        <strong>团队介绍</strong>
        <div class="Introduction-container">
          <p>
            团队立足重庆，积极拓展国内市场，在北京、天津、贵州、云南、西藏、内蒙古、新疆等地开展劳务合作和工程承包。创建了XXX、XXX等优质工程400多个。同时，团队以房地产开发为龙头实施产业延伸战略，开发的XXX、XXX等一大批高品质房地产项目，取得了良好的经济和社会效益，形成了以房屋建筑和房地产开发为主业的多元化经营格局，企业综合竞争力显著增强。
          </p>
          <p>
            团队将秉承“从道鼎新、富民兴业”的发展理念，立足重庆，面向全国，走向世界，为改进人类居住、生活和生产的基础设施提供高品质、高价值、系统化的建筑服务，时刻关注社会责任和环保问题，致力于推广可持续发展的建筑理念,不断超越客户、设计师、承包商和所在社区对我们的期望，努力成为中国建筑服务业的领先企业，我们相信，在团队协作、专业技能和客户满意度的共同驱动下，我们的建工团队将继续成长和发展。
          </p>
        </div>
      </section>

      <section class="Certification">
        <strong>荣誉资质</strong>
        <Certification />
      </section>

      <section class="contact">
        <strong>联系我们</strong>
        <div class="contact-container">
          <div class="contact-box">
            <div class="contact-item">
              <div v-bind:class="['contact-location', 'contact-icon']" />
              <div class="contact-title">联系地址</div>
              <div class="contact-value">
                重庆市江北区观音桥步行街10号天和里购物中心
              </div>
            </div>
            <div class="contact-item">
              <div v-bind:class="['contact-tel', 'contact-icon']" />
              <div class="contact-title">联系电话</div>
              <div class="contact-value">18589322222</div>
            </div>
            <div class="contact-item">
              <div v-bind:class="['contact-email', 'contact-icon']" />
              <div class="contact-title">联系邮箱</div>
              <div class="contact-value">xixixixi@sina.com</div>
            </div>
          </div>

          <div class="contact-map">
            <Map />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Certification from "@/components/Certification.vue";
import Map from "./map.vue";
</script>

<style lang="scss" scoped>
.aboutus {
  width: 100vw;
  background: url("@/assets/images/aboutus.jpg") #fff no-repeat;
  background-attachment: fixed;
  background-position-y: 15%;
  background-size: cover;
  background-position: center;

  main {
    padding-top: 500px;
    background: transparent;
    @media screen and (max-width: 768px) {
      padding-top: 1100px;
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
    .Introduction {
      overflow: hidden;
      &-container {
        margin-top: 5vh;
        p {
          color: #333333;
          text-indent: 2em;
          text-align: left;
          word-break: break-all;
        }
      }
    }

    .Certification {
      margin-top: -16px;
      &-container {
        margin-top: 5vh;
        @media screen and (max-width: 768px) {
          margin-top: 4vh;
        }
      }
    }

    .contact {
      height: 800px;
      margin-top: -16px;

      @media screen and (max-width: 768px) {
        height: 1700px;
      }

      &-container {
        position: relative;

        .contact-box {
          position: absolute;
          top: 5vh;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 5;

          .contact-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            width: calc(33% - 60px);
            height: 240px;
            text-align: center;
            border-radius: 8px;
            background: #fff;
            color: #333333;
            box-shadow: 0px 6px 10px 0px rgba(185, 185, 185, 0.5);
            cursor: pointer;
            @media screen and (max-width: 768px) {
              height: 350px;
            }

            .contact-title {
              font-size: 24px;
              @media screen and (max-width: 768px) {
                font-size: 48px;
              }
            }

            .contact-value {
              display: none;
            }

            .contact-icon {
              width: 50px;
              height: 50px;
              margin-bottom: 18px;
              @media screen and (max-width: 768px) {
                width: 80px;
                height: 80px;
              }
            }

            .contact-location {
              background: url("@/assets/images/location.png") no-repeat
                center/cover;
            }

            .contact-tel {
              background: url("@/assets/images/tel.png") no-repeat center/cover;
            }

            .contact-email {
              background: url("@/assets/images/email.png") no-repeat
                center/cover;
            }

            &:hover {
              width: calc(33% - 60px);
              height: inherit;
              background: url("@/assets/images/card-bck.png") no-repeat
                center/cover;
              transition: all 0.5s ease-in-out;

              .contact-icon {
                display: none;
              }

              .contact-value {
                margin-top: 18px;
                display: block;
                @media screen and (max-width: 768px) {
                  font-size: 48px !important;
                }
              }
            }
          }
        }

        .contact-map {
          position: absolute;
          top: 280px;
          left: 0;
          width: 100%;
          height: 400px;
          z-index: 0;
          @media screen and (max-width: 768px) {
            top: 630px;
            height: 800px;
          }
        }
      }
    }
  }
}
</style>
