<template>
  <div class="tab-header">
    <div class="inner">
      <div class="pull-left">
        <div class="pull-left">嗨，欢迎来到<span class="cr">U袋网</span></div>
        <router-link :to="{ name: 'Home' }">网店代销</router-link>
        <router-link :to="{ name: 'Home' }">帮助中心</router-link>
      </div>
      <div class="pull-right">
        <router-link :to="{ name: 'Home' }">登录</router-link>
        <router-link :to="{ name: 'Home' }">注册</router-link>
        <router-link :to="{ name: 'Home' }">我的U袋</router-link>
        <router-link :to="{ name: 'Home' }">我的订单</router-link>
        <router-link :to="{ name: 'Home' }">积分平台</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>