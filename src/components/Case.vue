<template>
  <div class="Case-container">
    <div
      v-for="(item, index) in caseList"
      :class="`Case-container-item Case-container-item${index}`"
      v-on:mouseover="handleOver(index)"
      v-on:mouseout="handleOut()"
      :key="index"
    >
      <a href="#">
        <img :src="item.img" class="case-bg1 case-bg" />
        <div class="case-bg2 case-bg" />
        <div class="case-up">
          <div class="case-up-title">{{ item.title }}</div>
        </div>
        <div class="case-down">
          <strong class="case-down-title">{{ item.title }}</strong>
          <p class="case-down-info">{{ item.info }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import solution0 from "@/assets/images/solution/solution0.jpg";
import solution1 from "@/assets/images/solution/solution1.png";
import solution2 from "@/assets/images/solution/solution2.jpg";
import solution3 from "@/assets/images/solution/solution3.png";
import solution4 from "@/assets/images/solution/solution4.png";
import solution5 from "@/assets/images/solution/solution5.png";
const caseList = [
  { title: "房建施工", img: solution0, info: "" },
  { title: "市政路桥", img: solution1, info: "" },
  { title: "勘察设计", img: solution2, info: "" },
  { title: "机电安装", img: solution3, info: "" },
  { title: "装饰装修", img: solution4, info: "" },
  { title: "建材物流", img: solution5, info: "" },
];

const state = reactive({
  activeIndex: "",
});

const handleOver = (index) => {
  if (state.activeIndex != index) {
    console.log("indexindex", index);
    state.activeIndex = index;
  }
};

const handleOut = () => {
  state.activeIndex = "";
};
</script>

<style lang="scss" scoped>
.Case-container {
  display: flex;
  height: 300px;
  &-item {
    position: relative;
    width: 20%;
    margin: 0 1px;
    transition: all 0.8s ease;

  }
}
</style>
