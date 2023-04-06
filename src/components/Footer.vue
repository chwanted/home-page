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
        <a href="https://www.cscec.com/">中国建筑网</a>
        <a href="http://www.zgjzy.org.cn/">中国建筑协会</a>
        <a href="https://jzsc.mohurd.gov.cn/home">住房和城乡建设部</a>
        <a href="https://www.jzsbs.com/">建筑新网</a>
      </span>
      <span class="footer-box">
        Copyright &copy; 2020 - 2023 {{ state.config.keepOnRecordIcp }}
      </span>
      <span>{{ state.config.name }}</span>
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
  background: #474747;
  text-align: center;
  padding: 3% 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;

  @media screen and (max-width: 768px) {
    padding: 3% 5%;
    .footer-left,
    .footer-right {
      & > span {
        font-size: 52px !important;
      }
    }
  }

  &-left {
    v & > span {
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
        font-weight: normal;
        margin-right: 30px;
        white-space: break-all;
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
        font-weight: bold;
      }
    }
  }
}
</style>
