<template>
  <div role="tabpanel" class="tab-pane fade in active" id="up">
    <form action="" class="user-setting__form" role="form">
      <div class="form-group">
        <label for="up-money">提现金额</label>
        <input
          id="up-money"
          class="assets-control"
          placeholder="输入您要提现的金额"
          type="text"
        />
        <span class="help-block fz12">注：单次提现，提现金额不低于100.0元</span>
      </div>
      <div class="form-group">
        <label for="up-name">姓名</label>
        <input
          id="up-name"
          class="assets-control"
          placeholder="输入您的姓名"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="up-bank">开户行</label>
        <input
          id="up-bank"
          class="assets-control"
          placeholder="开户行"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="up-number">银行账号</label>
        <input
          id="up-number"
          class="assets-control"
          placeholder="银行账号"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="up-phone">手机号码</label>
        <input
          id="up-phone"
          class="assets-control"
          placeholder="请输入您的联系号码"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="up-note">备注（可不填）</label>
        <textarea id="up-note" class="assets-control" placeholder=""></textarea>
      </div>
      <div class="user-form-group tags-box">
        <button type="button" class="btn">申请提现</button>
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