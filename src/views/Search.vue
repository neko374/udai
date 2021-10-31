<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-物流查询</div>
          <form action="" class="user-addr__form form-horizontal" role="form">
            <div class="input-group col-sm-6">
              <input class="form-control" placeholder="快递单号" type="text" />
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">查询</button>
              </span>
            </div>
            <div class="help-block">
              例如，您可以输入：<span class="cr">40105060123</span>
            </div>
            <div class="query-result__box"></div>
          </form>
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