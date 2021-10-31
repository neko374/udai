<template>
  <div role="tabpanel" class="tab-pane fade in active" id="log">
    <div class="bs-example" data-example-id="hoverable-table">
      <table
        class="assets-table table table-bordered table-hover c6 text-center"
      >
        <thead>
          <tr>
            <th>操作时间</th>
            <th>类型</th>
            <th>金额</th>
            <th>备注</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tables" :key="item.id">
            <td>{{ item.time }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.money }}</td>
            <td>{{ item.des }}</td>
            <td>
              <span class="text-primary">{{ item.now }}</span>
            </td>
            <td><a href="">付款</a> <a href="">取消</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: [
        {
          id: 1,
          time: "2021.09.21",
          type: "充值",
          money: "51.00",
          des: "充值代销",
          now: "未确认",
        },
        {
          id: 2,
          time: "2021.09.20",
          type: "充值",
          money: "52.00",
          des: "充值代销",
          now: "已完成",
        },
        {
          id: 3,
          time: "2021.09.25",
          type: "充值",
          money: "54.00",
          des: "充值代销",
          now: "未确认",
        },
        {
          id: 4,
          time: "2021.09.22",
          type: "充值",
          money: "57.00",
          des: "充值代销",
          now: "未确认",
        },
      ],
    };
  },
};
</script>

<style>
</style>