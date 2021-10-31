<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <!-- vue部分 -->
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">订单中心-我的收藏</div>
          <div class="collection-list__area clearfix">
            <!-- vue部分 -->
            <div id="app">
              <div class="item-card" v-for="(s, index) in list" :key="index">
                <a href="item_show.html" class="photo">
                  <img :src="s.pic" :alt="s.name" class="cover" />
                  <div class="name">{{ s.name }}</div>
                </a>
                <div class="middle">
                  <div class="price"><small>￥</small>{{ s.price }}</div>

                  <!-- 取消收藏按钮 -->
                  <div class="sale">
                    <span @click="del(index)">取消收藏</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page text-right clearfix">
            <a class="disabled">上一页</a>
            <a class="select">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a class="" href="">下一页</a>
            <a class="disabled">1/3页</a>
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
          pic: require("../assets/images/temp/M-001.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/M-002.jpg"),
          name: "霜天月明 原创日常汉服男云纹绣花单大氅传统礼服外套",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/M-003.jpg"),
          name: "琅轩日常汉服男龙纹绣花短褙子气质传统外套春秋非古装",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/M-004.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/M-005.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/M-006.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-001.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-002.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-003.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-004.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-005.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
        {
          pic: require("../assets/images/temp/S-006.jpg"),
          name: "锦瑟 原创传统日常汉服男绣花交领衣裳cp情侣装春夏款",
          price: "18.0",
        },
      ],
    };
  },
  methods: {
    del(i) {
      if (window.confirm("是否取消收藏？")) {
        this.list.splice(i, 1);
      }
    },
  },
};
</script>

<style>
</style>