<template>
  <div class="GoTop">
    <!-- <div class="GoTop-item" @click="contactUs()">
      <span class="contact" /><span>联系我们</span>
    </div> -->
    <div class="GoTop-item" @click="GoTop()">
      <span class="goTop" /><span>回到顶部</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const GoTop = () => {
  // 页面回到顶部（滚动效果）
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (scrollTop > 0) {
    const timeTop = setInterval(() => {
      document.documentElement.scrollTop =
        document.body.scrollTop =
        scrollTop -=
          50; //一次减50往上滑动
      if (scrollTop <= 0) {
        clearInterval(timeTop);
      }
    }, 10); //定时调用函数使其更顺滑
  }
};

const contactUs = () => {
  router.push({ path: "/AboutUs" });
};
</script>

<style lang="scss" scoped>
.GoTop {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  right: 0;
  bottom: 1%;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    right: 3%;
    bottom: 7%;
    .GoTop-item {
      &:first-of-type {
        display: none;
      }

      &:last-of-type {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: rgba(102, 102, 102, 0.5);

        & > span {
          &:last-of-type {
            display: none;
          }
        }

        .goTop {
          display: block;
          width: 100px;
          height: 100px;
          margin: 25% auto;
        }
      }
    }
  }

  &-item {
    width: fit-content;
    padding: 10px;
    border-radius: 25px 0 0 25px;
    background: rgba(51, 51, 51, 0.63);
    color: #fff;
    margin-bottom: 10px;
    font-size: 14px;

    &:hover {
      background: rgb(5,39,175);

      & > span:last-of-type {
        display: inline-block;
        margin-left: 5px;
      }
    }

    & > span {
      &:first-of-type {
        display: inline-block;
        vertical-align: middle;
      }

      &:last-of-type {
        display: none;
      }
    }

    .contact {
      width: 20px;
      height: 20px;
      background: url("@/assets/images/contact.png") no-repeat center/contain;
    }

    .goTop {
      width: 20px;
      height: 20px;
      background: url("@/assets/images/goTop.png") no-repeat center/contain;
    }
  }
}
</style>
