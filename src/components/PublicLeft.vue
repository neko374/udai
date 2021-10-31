<template>
  <div class="pull-left bgf">
    <router-link :to="{ name: 'Home' }" class="title">U袋欢迎页</router-link>
    <dl
      class="user-center__nav"
      v-for="(item, index) in menuData"
      :key="item.id"
      @mouseenter="changeIdx(index)"
      @mouseleave="changeIdx(-1)"
    >
      <dt>{{ item.title }}</dt>
      <dd v-show="index === idx">
        <ul v-for="tit in item.list" :key="tit.id">
          <li>
            <router-link :to="tit.path">
              {{ tit.subtitle }}
            </router-link>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          title: "账户信息",
          list: [
            { id: 11, subtitle: "个人资料", path: "/myinfo" },
            { id: 12, subtitle: "资金管理", path: "/userfunds/chongzhi" },
            { id: 13, subtitle: "积分平台", path: "/point" },
            { id: 14, subtitle: "收货地址", path: "/address" },
            { id: 15, subtitle: "我的优惠券", path: "/sale/sale1" },
            { id: 16, subtitle: "修改支付密码", path: "/changepay" },
            { id: 17, subtitle: "修改登录密码", path: "/changelogin" },
          ],
        },
        {
          id: 2,
          title: "订单中心",
          list: [
            { id: 18, subtitle: "我的订单", path: "/order" },
            { id: 19, subtitle: "我的收藏", path: "/collect" },
            { id: 20, subtitle: "退款/退货", path: "/refund" },
          ],
        },
        {
          id: 3,
          title: "服务中心",
          list: [
            { id: 21, subtitle: "物流查询", path: "/search" },
            // { id: 22, subtitle: "数据自助下载", path: "/" },
            { id: 23, subtitle: "售后服务", path: "/afterservice" },
            { id: 24, subtitle: "配送服务", path: "/send" },
            { id: 25, subtitle: "用户协议", path: "/agreement" },
            { id: 26, subtitle: "常见问题", path: "/issue" },
          ],
        },
        {
          id: 4,
          title: "新手上路",
          list: [
            { id: 27, subtitle: "如何成为代理商", path: "/how" },
            { id: 28, subtitle: "代销商上架教程", path: "/up" },
            { id: 29, subtitle: "分销商常见问题", path: "/noissue" },
            { id: 30, subtitle: "付款账户", path: "/pay" },
          ],
        },
        {
          id: 5,
          title: "U袋网",
          list: [
            { id: 31, subtitle: "企业简介", path: "/enterprise" },
            { id: 32, subtitle: "加入U袋", path: "/join" },
            { id: 33, subtitle: "隐私说明", path: "/something" },
          ],
        },
      ],
      idx: -1,
    };
  },
  methods: {
    changeIdx(i) {
      this.idx = i;
    },
  },
};
</script>

<style>
</style>