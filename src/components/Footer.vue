<template>
  <div id="footer" class="footer">
    <p class="footer-box">
      <span>地址：{{ state.config.address }}</span>
      <span>Tel：{{ state.config.phone }}</span>
      <span>Fax：{{ state.config.tel }}</span>
    </p>
    <p class="footer-box">
      <span>邮编：{{ state.config.zip }}</span>
      <span>邮箱：{{ state.config.email }}</span>
    </p>
    <p class="footer-box">
      Copyright &copy; 2020 - 2023 {{ state.config.keepOnRecordIcp }}
      {{ state.config.name }}
    </p>
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
  width: 100%;
  height: 100%;
  background: #474747;
  overflow: hidden;
  text-align: center;
  padding: 10px 0;

  &-box {
    color: #d3d3d3;
    font-size: 14px;
    margin-bottom: 10px;

    & > span {
      margin-left: 10px;
    }

    &:last-of-type {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 997px) {
    .title {
      font-size: 20px;
    }
    .address_tel_fax {
      font-size: 12px;
    }
    .email_wx {
      font-size: 12px;
    }
    .copy {
      font-size: 12px;
      margin: 30px 0 10px;
    }
  }
}
</style>
