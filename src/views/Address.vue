<template>
  <div class="content clearfix bgf5">
    <section class="user-center inner clearfix">
      <public-left></public-left>
      <div class="pull-right">
        <div class="user-content__box clearfix bgf">
          <div class="title">账户信息-收货地址</div>
          <form action="" class="user-addr__form form-horizontal" role="form">
            <p class="fz18 cr">
              新增收货地址<span class="c6" style="margin-left: 20px"
                >电话号码、手机号码选填一项，其余均为必填项</span
              >
            </p>
            <div class="form-group">
              <label for="name" class="col-sm-2 control-label"
                >收货人姓名：</label
              >
              <div class="col-sm-6">
                <input
                  class="form-control"
                  id="name"
                  placeholder="请输入姓名"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="details" class="col-sm-2 control-label"
                >收货地址：</label
              >
              <div class="col-sm-10">
                <div class="addr-linkage">
                  <select name="province"></select>
                  <select name="city"></select>
                  <select name="area"></select>
                  <select name="town"></select>
                </div>
                <input
                  class="form-control"
                  id="details"
                  placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码等信息"
                  maxlength="30"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="mobile" class="col-sm-2 control-label"
                >手机号码：</label
              >
              <div class="col-sm-6">
                <input
                  class="form-control"
                  id="mobile"
                  placeholder="请输入手机号码"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="phone" class="col-sm-2 control-label"
                >电话号码：</label
              >
              <div class="col-sm-6">
                <input
                  class="form-control"
                  id="phone"
                  placeholder="请输入电话号码"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-6">
                <div class="checkbox">
                  <label
                    ><input type="checkbox" /><i></i> 设为默认收货地址</label
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-6">
                <button type="submit" class="but">保存</button>
              </div>
            </div>
          </form>
          <p class="fz18 cr">已保存的有效地址</p>

          <div class="table-thead addr-thead">
            <div class="tdf1">收货人</div>
            <div class="tdf2">所在地</div>
            <div class="tdf3"><div class="tdt-a_l">详细地址</div></div>
            <div class="tdf1">电话/手机</div>
            <div class="tdf1">操作</div>
            <div class="tdf1"></div>
          </div>
          <div class="addr-list">
            <div class="addr-item">
              <div class="tdf1">喵喵喵</div>
              <div class="tdf2 tdt-a_l">福建省 福州市 晋安区</div>
              <div class="tdf3 tdt-a_l">浦下村74号</div>
              <div class="tdf1">153****7649</div>
              <div class="tdf1 order">
                <a href="">修改</a><a href="">删除</a>
              </div>
              <div class="tdf1">
                <a href="" class="default active">默认地址</a>
              </div>
            </div>
            <div class="addr-item">
              <div class="tdf1">喵污喵⑤</div>
              <div class="tdf2 tdt-a_l">福建省 福州市 仓山区 建新镇</div>
              <div class="tdf3 tdt-a_l">建新中心小学</div>
              <!-- <div class="tdf1">350104</div> -->
              <div class="tdf1">153****7649</div>
              <div class="tdf1 order">
                <a href="udai_address_edit.html">修改</a><a href="">删除</a>
              </div>
              <div class="tdf1">
                <a href="" class="default">设为默认</a>
              </div>
            </div>
            <div class="addr-item">
              <div class="tdf1">taroxd</div>
              <div class="tdf2 tdt-a_l">福建省 福州市 鼓楼区 鼓东街道</div>
              <div class="tdf3 tdt-a_l">
                世界金龙大厦20层B北 福州腾讯企点运营中心
              </div>
              <!-- <div class="tdf1">350104</div> -->
              <div class="tdf1">153****7649</div>
              <div class="tdf1 order">
                <a href="udai_address_edit.html">修改</a><a href="">删除</a>
              </div>
              <div class="tdf1">
                <a href="" class="default">设为默认</a>
              </div>
            </div>
            <div class="addr-item">
              <div class="tdf1">VIPArcher</div>
              <div class="tdf2 tdt-a_l">福建省 福州市 仓山区 建新镇</div>
              <div class="tdf3 tdt-a_l">详细地址</div>
              <div class="tdf1">153****7649</div>
              <div class="tdf1 order">
                <a href="udai_address_edit.html">修改</a><a href="">删除</a>
              </div>
              <div class="tdf1">
                <a href="" class="default">设为默认</a>
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
};
</script>

<style>
</style>