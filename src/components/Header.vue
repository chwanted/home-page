<template>
  <header class="header">
    <h4 class="header-title">袁仁山团队</h4>
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
const state = reactive({
  navIndex: 0,
});
const navList = [
  { name: "首页", path: "" },
  { name: "新闻中心", path: "" },
  { name: "核心业务", path: "" },
  { name: "企业文化", path: "" },
  { name: "关于我们", path: "" },
];

const navClick = (index, path) => {
  state.navIndex = index;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 0 100px;
  height: 150px;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);

  &-title {
    font-size: 54px;
  }

  &-menu {
    display: flex;
    font-size: 38px;

    & > li {
      margin-right: 100px;
      list-style: none;
      cursor: pointer;
    }

    .menu-active {
      color: #c00;
    }
  }
}
</style>
