<template>
  <header
    id="navbar"
    :class="['header', pageScrolled ? 'bg-white' : 'bg-transparent']"
  >
    <h4 class="header-title" @click.prevent="scrollTo('#navbar')">
      袁仁山团队
    </h4>
    <ul class="header-menu">
      <li
        v-for="(item, index) in navList"
        :key="index"
        @click.prevent="navClick(index, item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="header-menu-icon" @click="setVisbile()" />
    <!-- <div class="menu-mask" v-show="state.menuVisible"> -->
    <div
      class="menu-mask"
      :style="{ height: state.menuVisible ? '100vh' : 0 }"
      @click="setVisbile()"
    >
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == state.navIndex ? 'menu-mask-active' : ''"
          @click.prevent="navClick(index, item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";
import { scroller } from "vue-scrollto/src/scrollTo";
const scrollTo = scroller();
// import { useRouter } from "vue-router";

// const router = useRouter();
const state = reactive({
  navIndex: 0,
  menuVisible: false,
});
const pageScrolled = ref(false);
const navList = [
  { name: "首页", path: "/", scrollTo: "#navbar" },
  { name: "核心业务", path: "/Business", scrollTo: "#business" },
  { name: "优秀案例", path: "/solution", scrollTo: "#solution" },
  { name: "企业文化", path: "/Culture", scrollTo: "#culture" },
  { name: "发展历程", path: "/AboutUs", scrollTo: "#aboutUs" },
  { name: "合作伙伴", path: "/partner", scrollTo: "#partner" },
  // { name: "新闻资讯", path: "/News", scrollTo: "#news" },
];

const navClick = (index, item) => {
  // state.navIndex = index;
  scrollTo(item.scrollTo);
  // router.push({ path: item.path });
};

const setVisbile = () => {
  state.menuVisible = !state.menuVisible;
};

const handleScroll = () => {
  pageScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.bg-transparent {
  background-color: transparent;
  box-shadow: none;
  color: white;
}

.bg-white {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  color: #333333;
  box-shadow: 0 14px 20px -12px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 7vh;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    // background-color: rgba(255, 255, 255);
    .header-title {
      margin-left: 130px;
      font-size: 2.7vh;
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
    font-weight: 500;

    @media screen and (max-width: 768px) {
      display: none;
    }

    & > li {
      margin-right: 40px;
      list-style: none;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        color: rgb(5, 39, 175);
      }

      @media screen and (max-width: 768px) {
        margin-right: 80px;
      }
    }

    .menu-active {
      color: rgb(5, 39, 175);
    }
  }

  &-menu-icon {
    display: none;
    width: 100px;
    height: 100px;
    margin-right: 100px;
    color: white;
    background: url("@/assets/images/menu.png") no-repeat center/contain;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  .menu-mask {
    position: fixed;
    top: 7vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s;
    color: #333333;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;

      li {
        list-style: none;
        overflow: hidden;
        margin: 0 230px;
        height: 250px;
        line-height: 250px;
        text-align: left;
      }
    }

    &-active {
      color: rgb(5, 39, 175);
    }
  }
}
</style>
