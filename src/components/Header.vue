<template>
  <header class="header">
    <h4 class="header-title">袁仁山团队</h4>
    <ul class="header-menu">
      <!-- <li
        v-for="(item, index) in navList"
        :key="index"
        :class="index == navIndex ? 'active' : ''"
        @click="navClick(index, item.name)"
      ></li> -->
    </ul>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 80px;
  width: 100%;
  z-index: 9999;
  /* background: rgba(0, 0, 0, 0.2); */
  background: #fff;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);

  &-title {
  }
}
</style>
