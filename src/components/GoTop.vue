<template>
  <div class="GoTop" @click="GoTop()">
    <span class="">sss</span>
  </div>
</template>

<script setup>
const GoTop = () => {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothscroll);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
};
</script>

<style lang="scss" scoped>
.GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  cursor: pointer;
}
</style>
