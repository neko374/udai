<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-修改支付密码</div>
          <div class="modify_div">
            <div class="clearfix">
              <a href="" role="button" class="but"
                >修改支付密码</a
              >
              <a href="" role="button" class="but"
                >忘记支付密码</a
              >
            </div>
            <div class="help-block">
              随时都能更改密码，保障您账户余额支付的安全
            </div>
          </div>
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