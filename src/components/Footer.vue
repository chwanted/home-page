<template>
  <div id="footer" class="footer">
    <div class="footer-left">
      <span>CONTACT US 联系我们</span>
      <span>联系邮箱： {{ state.config.email }}</span>
      <span>联系电话： {{ state.config.phone }}</span>
      <span>联系地址： {{ state.config.address }}</span>
    </div>
    <div class="footer-right">
      <span>友情链接</span>
      <span class="link-container">
        <a href="#">中国建筑网</a>
        <a href="#">中国建筑协会</a>
        <a href="#">建设工程网</a>
        <a href="#">建新网</a>
      </span>
      <span class="footer-box">
        Copyright &copy; 2020 - 2023 {{ state.config.keepOnRecordIcp }}
        {{ state.config.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  config: {
    title: "袁仁山团队",
    name: "袁仁山团队",
    email: "XXXXXXXX@126.com",
    phone: "18858748745",
    tel: "021-5948544",
    zip: "545001",
    address: "重庆市江北区石马河街道",
    /** 备案号 */
    keepOnRecordIcp: "渝ICP备20041627号",
  },
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  background: #474747;
  text-align: center;
  padding: 3% 5%;
  display: flex;
  justify-content: center;
  align-items: start;

  &-left {
    margin-right: 150px;
    & > span {
      &:first-of-type {
        flex: 1;
        margin-bottom: 20px;
      }
    }
  }

  &-right {
    & > span {
      &:first-of-type {
        margin-bottom: 20px;
      }
      a {
        color: #d3d3d3;
        margin-right: 30px;
      }
    }
  }

  &-left,
  &-right {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #d3d3d3;

    & > span {
      display: inline-block;
      font-size: 12px;
      margin-top: 10px;

      &:first-of-type {
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

  }
}
</style>
