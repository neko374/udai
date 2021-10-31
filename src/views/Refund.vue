<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-退款/退货</div>
          <div class="order-list__box bgf">
            <div class="order-panel">
              <ul class="nav user-nav__title" role="tablist">
                <li role="presentation" class="nav-item active">
                  <a
                    href="#all"
                    aria-controls="all"
                    role="tab"
                    data-toggle="tab"
                    >所有订单</a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#money"
                    aria-controls="money"
                    role="tab"
                    data-toggle="tab"
                    >退款 <span class="cr">0</span></a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#item"
                    aria-controls="item"
                    role="tab"
                    data-toggle="tab"
                    >退货 <span class="cr">0</span></a
                  >
                </li>
              </ul>

              <!-- vue部分 -->
              <div id="app">
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade in active" id="all">
                    <table class="table table-hover table-striped text-center">
                      <tr>
                        <th width="170">申请单号</th>
                        <th width="170">原订单号</th>
                        <th width="170">商品名称</th>
                        <th width="105">申请时间</th>
                        <th width="105">应退金额</th>
                        <th width="90">订单状态</th>
                        <th width="90">操作</th>
                      </tr>
                      <tr v-for="(o, index) in list" :key="index">
                        <td>{{ o.num1 }}</td>
                        <td>{{ o.num2 }}</td>
                        <td class="text-left">
                          <div class="name ep" style="width: 180px">
                            {{ o.name }}
                          </div>
                          <div class="c9 ep">{{ o.type }}</div>
                        </td>
                        <td>{{ o.date }}</td>
                        <td>¥{{ o.price }}</td>
                        <td class="refund-state">
                          {{ o.now }}<br /><a href="">联系客服</a>
                        </td>
                        <td class="refund-state" v-if="o.now == '退款中'">
                          <span id="can" @click="del(index)">取消退款</span>
                        </td>
                        <td class="refund-state" v-else><span>已完成</span></td>
                      </tr>
                    </table>
                    <div
                      class="page text-right clearfix"
                      style="margin-top: 40px"
                    >
                      <a class="disabled">上一页</a>
                      <a class="select">1</a>
                      <a href="">2</a>
                      <a href="">3</a>
                      <a class="" href="">下一页</a>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="money">
                    <table class="table text-center">
                      <tr>
                        <th width="380">商品信息</th>
                        <th width="85">单价</th>
                        <th width="85">数量</th>
                        <th width="120">实付款</th>
                        <th width="120">交易状态</th>
                        <th width="120">交易操作</th>
                      </tr>
                      <tr class="order-empty">
                        <td colspan="6">
                          <div class="empty-msg">最近没有退款订单！</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="item">
                    <table class="table text-center">
                      <tr>
                        <th width="380">商品信息</th>
                        <th width="85">单价</th>
                        <th width="85">数量</th>
                        <th width="120">实付款</th>
                        <th width="120">交易状态</th>
                        <th width="120">交易操作</th>
                      </tr>
                      <tr class="order-empty">
                        <td colspan="6">
                          <div class="empty-msg">最近没有退货订单！</div>
                        </td>
                      </tr>
                    </table>
                  </div>
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
export default {
  components: { PublicLeft },
  data() {
    return {
      list: [
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款成功",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款成功",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
        {
          num1: "8586404226699013",
          num2: "2669901385864042",
          name: "纯色圆领短袖T恤活动衫弹",
          type: "颜色分类：深棕色 尺码：均码",
          now: "退款中",
          date: "2017-03-30",
          price: "18.0",
        },
      ],
    };
  },
  methods: {
    del(i) {
      if (window.confirm("确认要取消退款？")) {
        this.list.splice(i, 1);
      }
    },
  },
};
</script>

<style>
</style>