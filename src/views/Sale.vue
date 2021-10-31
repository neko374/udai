<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-积分平台</div>
          <ul class="nav user-nav__title" role="tablist">
            <li role="presentation" class="nav-item active">
              <router-link
                to="/sale/sale1"
                aria-controls="useful"
                role="tab"
                data-toggle="tab"
                >未使用</router-link
              >
            </li>
            <li role="presentation" class="nav-item">
              <router-link
                to="/sale/sale2"
                aria-controls="used"
                role="tab"
                data-toggle="tab"
                >已使用</router-link
              >
            </li>
            <li role="presentation" class="nav-item">
              <router-link
                to="/sale/sale3"
                aria-controls="overdue"
                role="tab"
                data-toggle="tab"
                >已过期</router-link
              >
            </li>
          </ul>
          <!-- vue部分 -->
          <div id="app">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="useful">
                <router-view />
                <div class="page text-right clearfix">
                  <a class="disabled">上一页</a>
                  <a class="select">1</a>
                  <a href="">2</a>
                  <a href="">3</a>
                  <a class="" href="">下一页</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PublicLeft from "../components/PublicLeft.vue";
import Sale1 from "./Sale/Sale1.vue";
import Sale2 from "./Sale/Sale2.vue";
import Sale3 from "./Sale/Sale3.vue";
export default {
  components: { PublicLeft, Sale1, Sale2, Sale3 },
};
</script>

<style>
</style>