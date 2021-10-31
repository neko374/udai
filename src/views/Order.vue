<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-我的订单</div>
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
                    href="#pay"
                    aria-controls="pay"
                    role="tab"
                    data-toggle="tab"
                    >待付款 <span class="cr">0</span></a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#emit"
                    aria-controls="emit"
                    role="tab"
                    data-toggle="tab"
                    >待发货 <span class="cr">0</span></a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#take"
                    aria-controls="take"
                    role="tab"
                    data-toggle="tab"
                    >待收货 <span class="cr">0</span></a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#eval"
                    aria-controls="eval"
                    role="tab"
                    data-toggle="tab"
                    >待评价 <span class="cr">0</span></a
                  >
                </li>
              </ul>

              <!-- vue部分 -->
              <!-- 所有订单 -->
              <div id="app">
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade in active" id="all">
                    <table class="table text-center">
                      <tr>
                        <th width="380">商品信息</th>
                        <th width="85">单价</th>
                        <th width="85">数量</th>
                        <th width="120">实付款</th>
                        <th width="120">交易状态</th>
                        <th width="120">交易操作</th>
                      </tr>
                      <tr
                        class="order-item"
                        v-for="(s, index) in list"
                        :key="index"
                      >
                        <td>
                          <label>
                            <a href="udai_order_detail.html" class="num">
                              {{ s.num }}
                            </a>
                            <div class="card">
                              <div class="img">
                                <img :src="s.pic" alt="" class="cover" />
                              </div>
                              <div class="name ep2">{{ s.name }}</div>
                              <div class="format">{{ s.color }}</div>
                              <div class="favour">
                                使用优惠券：优惠¥{{ s.sale }}
                              </div>
                            </div>
                          </label>
                        </td>
                        <td>￥{{ s.price }}</td>
                        <td>
                          <button
                            type="button"
                            @click="min(index)"
                            style="width: 18px"
                          >
                            -</button
                          ><input
                            type="text"
                            style="width: 20px"
                            v-model="s.n"
                          /><button
                            type="button"
                            @click="plus(index)"
                            style="width: 18px"
                          >
                            +
                          </button>
                        </td>
                        <td>
                          ￥{{ s.price * s.n }}<br /><span
                            class="fz12 c6 text-nowrap"
                            >(含运费: ¥0.00)</span
                          >
                        </td>
                        <td class="state">
                          <a class="but c6">等待付款</a>
                          <a href="udai_order_detail.html" class="but c9"
                            >订单详情</a
                          >
                        </td>
                        <td class="order">
                          <div class="del">
                            <span
                              class="glyphicon glyphicon-trash"
                              aria-hidden="true"
                              @click="d(index)"
                            ></span>
                          </div>
                          <a
                            href=""
                            class="but but-primary"
                            >立即付款</a
                          >
                          <!-- <a href="" class="but but-link">评价</a> -->
                          <span class="but c3">取消订单</span>
                        </td>
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
                  <!-- 待付款 -->
                  <div role="tabpanel" class="tab-pane fade" id="pay">
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
                          <div class="empty-msg">
                            最近没有任何订单，家里好像缺了点什么！<br /><a
                              href="item_category.html"
                              >要不瞧瞧去？</a
                            >
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- 待发货 -->
                  <div role="tabpanel" class="tab-pane fade" id="emit">
                    <table class="table text-center">
                      <tr>
                        <th width="380">商品信息</th>
                        <th width="85">单价</th>
                        <th width="85">数量</th>
                        <th width="120">实付款</th>
                        <th width="120">交易状态</th>
                        <th width="120">交易操作</th>
                      </tr>
                      <tr
                        class="order-item"
                        v-for="(s, index) in list"
                        :key="index"
                      >
                        <td>
                          <label>
                            <a href="udai_order_detail.html" class="num">
                              {{ s.num }}
                            </a>
                            <div class="card">
                              <div class="img">
                                <img :src="s.pic" alt="" class="cover" />
                              </div>
                              <div class="name ep2">{{ s.name }}</div>
                              <div class="format">{{ s.color }}</div>
                              <div class="favour">
                                使用优惠券：优惠¥{{ s.sale }}
                              </div>
                            </div>
                          </label>
                        </td>
                        <td>￥{{ s.price }}</td>
                        <td>{{ s.n }}</td>
                        <td>
                          ￥{{ s.price * s.n }}<br /><span
                            class="fz12 c6 text-nowrap"
                            >(含运费: ¥0.00)</span
                          >
                        </td>
                        <td class="state">
                          <a class="but c6">等待付款</a>
                          <a href="udai_order_detail.html" class="but c9"
                            >订单详情</a
                          >
                        </td>
                        <td class="order">
                          <div class="del">
                            <span
                              class="glyphicon glyphicon-trash"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <a
                            href="udai_shopcart_pay.html"
                            class="but but-primary"
                            >立即付款</a
                          >
                          <!-- <a href="" class="but but-link">评价</a> -->
                          <a href="" class="but c3">取消订单</a>
                        </td>
                      </tr>
                    </table>
                    <div
                      class="page text-right clearfix"
                      style="margin-top: 40px"
                    >
                      <a class="disabled">上一页</a>
                      <a class="select">1</a>
                      <a class="disabled">下一页</a>
                    </div>
                  </div>
                  <!-- 待收货 -->
                  <div role="tabpanel" class="tab-pane fade" id="take">
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
                          <div class="empty-msg">
                            最近没有任何订单，家里好像缺了点什么！<br /><a
                              href="item_category.html"
                              >要不瞧瞧去？</a
                            >
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- 待评价 -->
                  <div role="tabpanel" class="tab-pane fade" id="eval">
                    <table class="table text-center">
                      <tr>
                        <th width="380">商品信息</th>
                        <th width="85">单价</th>
                        <th width="85">数量</th>
                        <th width="120">实付款</th>
                        <th width="120">交易状态</th>
                        <th width="120">交易操作</th>
                      </tr>
                      <tr
                        class="order-item"
                        v-for="(s, index) in list"
                        :key="index"
                      >
                        <td>
                          <label>
                            <a href="udai_order_detail.html" class="num">
                              {{ s.num }}
                            </a>
                            <div class="card">
                              <div class="img">
                                <img :src="s.pic" alt="" class="cover" />
                              </div>
                              <div class="name ep2">{{ s.name }}</div>
                              <div class="format">{{ s.color }}</div>
                              <div class="favour">
                                使用优惠券：优惠¥{{ s.sale }}
                              </div>
                            </div>
                          </label>
                        </td>
                        <td>￥{{ s.price }}</td>
                        <td>{{ s.n }}</td>
                        <td>
                          ￥{{ s.price * s.n }}<br /><span
                            class="fz12 c6 text-nowrap"
                            >(含运费: ¥0.00)</span
                          >
                        </td>
                        <td class="state">
                          <a class="but c6">等待付款</a>
                          <a href="udai_order_detail.html" class="but c9"
                            >订单详情</a
                          >
                        </td>
                        <td class="order">
                          <div class="del">
                            <span
                              class="glyphicon glyphicon-trash"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <a
                            href="udai_shopcart_pay.html"
                            class="but but-primary"
                            >立即付款</a
                          >
                          <!-- <a href="" class="but but-link">评价</a> -->
                          <a href="" class="but c3">取消订单</a>
                        </td>
                      </tr>
                    </table>
                    <div
                      class="page text-right clearfix"
                      style="margin-top: 40px"
                    >
                      <a class="disabled">上一页</a>
                      <a class="select">1</a>
                      <a class="disabled">下一页</a>
                    </div>
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
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/M-004.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "100",
          n: "2",
        },
        {
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/M-001.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "200",
          n: "1",
        },
        {
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/item-img_1.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "40",
          n: "13",
        },
        {
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/M-002.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "20",
          n: "18",
        },
        {
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/M-003.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "60",
          n: "8",
        },
        {
          num: "2017-03-30 订单号: 2669901385864042",
          pic: require("../assets/images/temp/item-img_1.jpg"),
          name: "纯色圆领短袖T恤活动衫弹力柔软纯色圆领短袖T恤",
          color: "颜色分类：深棕色 尺码：均码",
          sale: "2.00",
          price: "30",
          n: "7",
        },
      ],
    };
  },
  methods: {
    min(i) {
      this.list[i].n = this.list[i].n <= 1 ? 1 : --this.list[i].n;
    },
    plus(i) {
      this.list[i].n++;
    },
    d(i) {
      if (window.confirm("删除订单！？")) {
        this.list.splice(i, 1);
      }
    },
  },
};
</script>

<style>
</style>