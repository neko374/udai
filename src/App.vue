<template>
  <div id="app">
    <public-header></public-header>
    <public-nav></public-nav>
    <!-- <public-left></public-left> -->
    <router-view />
  </div>
</template>
<script>
import PublicHeader from "./components/PublicHeader.vue";
import PublicLeft from "./components/PublicLeft.vue";
import PublicNav from "./components/PublicNav.vue";
export default {
  components: {
    PublicHeader,
    PublicLeft,
    PublicNav,
  },
};
</script>
<style lang="less">
</style>
