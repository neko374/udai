<template>
  <div class="coupon-list">
    <div class="coupon" v-for="(q, index) in list" :key="index">
      <div class="coupon-hd" id="gr">
        <b><small class="fz16">¥</small>{{ q.price }}</b>
        <div class="fz12">【使用期限】<br />{{ q.date }}</div>
      </div>
      <div class="coupon-bd">
        <div class="fz12 c9">券号：{{ q.num }}</div>
        <div class="fz12 c9">规则： {{ q.rule }}</div>
      </div>
      <a href="javascript:;" class="coupon-ft">已经过期</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          price: "12.99",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满500元",
        },
        {
          price: "24.99",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满150元",
        },
        {
          price: "220.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满520元",
        },
        {
          price: "21.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满521元",
        },
        {
          price: "2000.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满5000元",
        },
        {
          price: "9.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满20元",
        },
        {
          price: "4.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满10元",
        },
        {
          price: "400.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满1220元",
        },
        {
          price: "7.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满30元",
        },
        {
          price: "2.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满4元",
        },
        {
          price: "24.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满40元",
        },
        {
          price: "21.00",
          date: "2017.09.20至2017.12.5",
          num: "70000503249136",
          rule: "消费需满40元",
        },
      ],
    };
  },
};
</script>

<style>
#gr {
  background-color: gray;
}
</style>