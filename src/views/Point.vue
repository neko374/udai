<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-积分平台</div>
          <ul class="nav user-nav__title" role="tablist">
            <li role="presentation" class="nav-item active">
              <a href="#list" aria-controls="list" role="tab" data-toggle="tab"
                >我的积分</a
              >
            </li>
            <li role="presentation" class="nav-item">
              <a
                href="#detail"
                aria-controls="detail"
                role="tab"
                data-toggle="tab"
                >积分明细</a
              >
            </li>
          </ul>
          <div class="integral-box clearfix bgf5">
            <div class="integral-total">
              <div class="fz16">可用的积分</div>
              <b class="num">888</b>
            </div>
            <div class="integral-desc">
              <b class="cr fz16">积分使用规则：</b><br />
              <span class="c3">1、如何获得积分？</span>
              <ul>
                <li>
                  1) 积分可以通过在购买商品获得，积分会在确认收货的时候增加。
                </li>
                <li>2) 通过签到获得：每次签到可获得 3 积分</li>
              </ul>
              <span class="c3">2、如何使用积分？</span>
              <ul>
                <li>可使用积分兑换商品</li>
              </ul>
            </div>
          </div>
          <!-- 表头 -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="list">
              <p class="fz18 cr">商品兑换</p>
              <ul class="nav user-nav__title" role="tablist">
                <li role="presentation" class="nav-item active">
                  <a
                    href="#all"
                    aria-controls="all"
                    role="tab"
                    data-toggle="tab"
                    >全部</a
                  >
                </li>
                <li role="presentation" class="nav-item">
                  <a
                    href="#usable"
                    aria-controls="usable"
                    role="tab"
                    data-toggle="tab"
                    >可兑换</a
                  >
                </li>
              </ul>
              <div class="table-thead">
                <div class="tdf3">商品信息</div>
                <div class="tdf2">市场价</div>
                <div class="tdf2">所需积分</div>
                <div class="tdf1">操作</div>
              </div>
              <!-- 表体 -->
              <div class="tab-content">
                <!-- tab1 -->
                <div role="tabpanel" class="tab-pane fade in active" id="all">
                  <div class="integral-item__list">
                    <!-- 每个东西 -->
                    <div
                      class="integral-item"
                      v-for="(s, index) in list"
                      :key="index"
                    >
                      <div class="tdf3">
                        <a class="integral-item__info" href="">
                          <!-- 图 -->
                          <div class="img">
                            <img :src="s.pic" alt="" class="cover" />
                          </div>
                          <!-- 名字 -->
                          <div class="name ep2">{{ s.name }}</div>
                          <!-- 下面小字 -->
                          <div class="type">{{ s.type }}</div>
                        </a>
                      </div>
                      <!-- 价格 -->
                      <div class="tdf2">
                        <span class="c9">¥{{ s.price }}</span>
                      </div>
                      <!-- 积分 -->
                      <div class="tdf2">
                        <span class="cr">{{ s.point }}</span>
                      </div>
                      <div class="tdf1">
                        <!-- 按钮 -->
                        <a
                          class="but btn btn-success"
                          href="#"
                          role="button"
                          v-if="s.point > 888"
                          >积分不足</a
                        >
                        <a class="but btn" href="#" role="button" v-else
                          >兑换</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="page text-right clearfix">
                    <a class="disabled">上一页</a>
                    <a class="select">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a class="" href="">下一页</a>
                  </div>
                </div>
                <!-- tab2 -->
                <div role="tabpanel" class="tab-pane fade" id="usable">
                  <div class="integral-item__list">
                    <!-- 每个东西 -->
                    <div
                      class="integral-item"
                      v-for="(s, index) in list2"
                      :key="index"
                    >
                      <div class="tdf3">
                        <a class="integral-item__info" href="">
                          <!-- 图 -->
                          <div class="img">
                            <img :src="s.pic" alt="" class="cover" />
                          </div>
                          <!-- 名字 -->
                          <div class="name ep2">{{ s.name }}</div>
                          <!-- 下面小字 -->
                          <div class="type">{{ s.type }}</div>
                        </a>
                      </div>
                      <!-- 价格 -->
                      <div class="tdf2">
                        <span class="c9">¥{{ s.price }}</span>
                      </div>
                      <!-- 积分 -->
                      <div class="tdf2">
                        <span class="cr">{{ s.point }}</span>
                      </div>
                      <div class="tdf1">
                        <!-- 按钮 -->
                        <a
                          class="but btn btn-block"
                          href="#"
                          role="button"
                          v-if="s.point > 888"
                          >积分不足</a
                        >
                        <a class="but btn" href="#" role="button" v-else
                          >兑换</a
                        >
                      </div>
                    </div>
                  </div>
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
            <div role="tabpanel" class="tab-pane fade" id="detail">
              <div class="table-thead">
                <div class="tdf3">来源/用途</div>
                <div class="tdf2">积分变化</div>
                <div class="tdf2">日期</div>
                <div class="tdf1">备注</div>
              </div>
              <div class="integral-item__list">
                <div class="integral-item">
                  <div class="tdf3">
                    <a class="integral-item__info" href="">
                      <div class="img">
                        <img
                          src="../assets/images/temp/M-001.jpg"
                          alt=""
                          class="cover"
                        />
                      </div>
                      <div class="name ep2">
                        锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款
                      </div>
                      <div class="type">颜色分类：深棕色 尺码：均码</div>
                    </a>
                  </div>
                  <div class="tdf2">
                    <b class="fz24 cg">+200</b>
                  </div>
                  <div class="tdf2">
                    <span class="c6">2017年4月12日 15:13:14</span>
                  </div>
                  <div class="tdf1">
                    <span class="c6">交易获得</span>
                  </div>
                </div>
              </div>
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
          pic: require("../assets/images/temp/S-001.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "1000",
        },
        {
          pic: require("../assets/images/temp/S-002.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "2690.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/S-003.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/S-004.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/S-005.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/S-006.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/S-007.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
      ],
      list2: [
        {
          pic: require("../assets/images/temp/M-001.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-002.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-003.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-004.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-005.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-006.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
        {
          pic: require("../assets/images/temp/M-007.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          type: "颜色分类：深棕色 尺码：均码",
          price: "269.90",
          point: "500",
        },
      ],
    };
  },
};
</script>

<style>
</style>