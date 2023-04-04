<template>
  <header class="header">
    <h4 class="header-title" @click="navClick(0, '/')">袁仁山团队</h4>
    <ul class="header-menu">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="index == state.navIndex ? 'menu-active' : ''"
        @click="navClick(index, item.path)"
      >
        {{ item.name }}
      </li>
    </ul>
  </header>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  navIndex: 0,
});
const navList = [
  { name: "首页", path: "/" },
  { name: "核心业务", path: "/Business" },
  { name: "新闻资讯", path: "/News" },
  { name: "企业文化", path: "/Culture" },
  { name: "关于我们", path: "/AboutUs" },
];

const navClick = (index, path) => {
  state.navIndex = index;
  router.push({ path: path });
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4.125vw;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  color: #333333;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    height: 190px;
    .header-title {
      margin-left: 130px;
      font-size: 100px;
    }
  }

  &-title {
    margin-left: 100px;
    font-size: 24px;
    white-space: nowrap;
    cursor: pointer;
  }

  &-menu {
    display: flex;
    font-size: 16px;
    margin-right: 10px;

    & > li {
      margin-right: 40px;
      list-style: none;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        color: #c00;
      }

      @media screen and (max-width: 768px) {
        margin-right: 80px;
      }
    }

    .menu-active {
      color: #c00;
    }
  }
}
</style>
