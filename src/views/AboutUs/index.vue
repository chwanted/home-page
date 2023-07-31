<template>
  <div class="aboutus">
    <main>
      <section class="Certification">
        <strong>团队风采</strong>
        <Certification />
      </section>

      <section class="Introduction">
        <strong>发展历程</strong>
        <div class="Introduction-container">
          <p>
            自2008年起，我们承包了大钢模工程，并在北京通州、大兴、秦皇岛、燕郊等多个地区承接人工项目。其中，我们还参与了北京通州《闽建集团》高档写字楼的建设，该写字楼高达5.45米层高。在应对多个班组轮换的情况下，我们积极参与并完成了该项目的一期、二期和三期工程。我们以专业的技术和全力以赴的工作态度，致力于为客户创造卓越的建筑工程成果。
          </p>
          <p>
            2014年，我们准确洞察建筑市场需求，成功转型并专注于定型化铝模板领域。在这一领域，我们取得了多项令人瞩目的代表性项目，彰显了我们在建筑行业的卓越实力。其中，广州《星汇湾》、武汉《龙湖滨江天街》《武汉中铁》等项目都是我们引以为豪的代表作品。同时，我们还在浙江的《海州上城》和《龙湖中德·舜山府》，以及新疆的《天山府》和河北的《尚府壹号》等地区展现了卓越的建筑技艺和优秀的项目管理能力。这些成功的项目不仅证明了我们对市场需求的准确洞察，更彰显了我们在定型化铝模板领域的卓越创新和不断超越的精神。
          </p>
          <p>
            在过去的2019年至2022年期间，我们荣幸地与众多知名地产企业合作，包括碧桂园、中建、北京城建、中德天城、金茂、万科、中海、金地、利祥地产等，彰显出我们在建筑行业的卓越表现。在这一时期，我们以卓越的劳务质量和员工表现，屡次荣获各大企业评选的殊荣，包括《优秀劳务》、《优秀员工》、《先进集体》、《安建双星》等荣誉。这些奖项是对我们专业团队不断努力和奉献的肯定，也展现了我们与众不同的优势。我们为这四年间每年在展开面积达到30万至100万平方的项目取得了卓越成绩感到自豪。尤其值得一提的是，在全球范围遭遇“白色口罩”的挑战下，我们始终坚持“负重前行”，为客户提供出色的单项木工劳务，创造了超过一亿人民币的巨大产值。这一连串的成功和荣誉，源自我们团结拼搏、追求卓越的团队精神，以及始终将客户满意放在首位的坚定承诺。我们将继续努力，不断创新，为更多客户提供卓越的服务和解决方案，开创更加辉煌的未来。
          </p>
        </div>
      </section>
      <!-- <section class="contact">
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
      </section> -->
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
      margin-top: -16px;
      margin-bottom: 76px;
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
