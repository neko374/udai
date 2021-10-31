<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-资金管理</div>
          <div class="assets-box">
            <samll class="c6">账户余额：</samll>
            <samll class="cr">¥</samll>
            <b class="fz16 cr">88.0</b>
            <ul class="nav pull-right" role="tablist">
              <li role="presentation" class="">
                <router-link
                  to="/userfunds/chongzhi"
                  aria-controls="add"
                  role="tab"
                  data-toggle="tab"
                  >充值</router-link
                >
              </li>
              <li role="presentation" class="">
                <router-link
                  to="/userfunds/tixian"
                  aria-controls="up"
                  role="tab"
                  data-toggle="tab"
                  >提现</router-link
                >
              </li>
              <li role="presentation" class="">
                <router-link
                  to="/userfunds/jiaoyijilu"
                  aria-controls="log"
                  role="tab"
                  data-toggle="tab"
                  >交易记录</router-link
                >
              </li>
            </ul>
          </div>
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PublicLeft from "../components/PublicLeft.vue";
export default {
  components: { PublicLeft },
};
</script>

<style>
</style>