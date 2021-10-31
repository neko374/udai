<template>
  <div role="tabpanel" class="tab-pane fade in active" id="add">
    <form action="" class="user-setting__form" role="form">
      <div class="form-group">
        <label for="add-money">充值金额</label>
        <input
          id="add-money"
          class="assets-control"
          placeholder="输入您要充值的金额"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="add-note">备注（可不填）</label>
        <textarea
          id="add-note"
          class="assets-control"
          placeholder=""
        ></textarea>
      </div>
      <div class="form-group">
        <label for="note">支付方式（手续费 <span id="tip">0</span>）</label>
        <div class="pay-method-box tags-box">
          <label
            ><input type="radio" name="pay_method" value="Alipay" /><i
              class="pay-method__img alipay"
            ></i
          ></label>
          <label
            ><input type="radio" name="pay_method" value="WeChat" /><i
              class="pay-method__img wechat"
            ></i
          ></label>
        </div>
      </div>
      <div class="user-form-group tags-box">
        <button type="button" class="btn">立即支付</button>
        <button type="reset" class="btn">重置</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>