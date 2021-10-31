import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "U袋网"
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "关于"
    },
  },
  {
    path: '/myinfo',
    name: 'Myinfo',
    component: () => import('../views/Myinfo.vue'),
    meta: {
      title: "个人资料"
    },
  },
  {
    path: '/userfunds',
    name: 'UserFunds',
    component: () => import('../views/UserFunds.vue'),
    meta: {
      title: "资金管理"
    },
    children: [
      {
        path: "chongzhi",
        component: () => import('../views/userfunds/ChongZhi.vue'),
        meta: {
          title: "充值"
        }
      },
      {
        path: "tixian",
        component: () => import('../views/userfunds/TiXian.vue'),
        meta: {
          title: "提现"
        }
      },
      {
        path: "jiaoyijilu",
        component: () => import('../views/userfunds/JiaoYiJiLu.vue'),
        meta: {
          title: "交易记录"
        }
      },
    ]
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/Collect.vue'),
    meta: {
      title: "我的收藏"
    },
  },
  {
    path: '/point',
    name: 'Point',
    component: () => import('../views/Point.vue'),
    meta: {
      title: "积分平台"
    },
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue'),
    meta: {
      title: "收货地址"
    },
  },
  {
    path: '/sale',
    name: 'Sale',
    component: () => import('../views/Sale.vue'),
    meta: {
      title: "优惠券"
    },
    children: [
      {
        path: "sale1",
        component: () => import('../views/Sale/Sale1.vue'),
        meta: {
          title: "未使用"
        }
      },
      {
        path: "sale2",
        component: () => import('../views/Sale/Sale2.vue'),
        meta: {
          title: "已使用"
        }
      },
      {
        path: "sale3",
        component: () => import('../views/Sale/Sale3.vue'),
        meta: {
          title: "已过期"
        }
      },
    ]
  },
  {
    path: '/changepay',
    name: 'ChangePay',
    component: () => import('../views/ChangePay.vue'),
    meta: {
      title: "支付密码"
    },
  },
  {
    path: '/changelogin',
    name: 'ChangeLogin',
    component: () => import('../views/ChangeLogin.vue'),
    meta: {
      title: "登录密码"
    },
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: {
      title: "我的订单"
    },
  },
  {
    path: '/refund',
    name: 'Refund',
    component: () => import('../views/Refund.vue'),
    meta: {
      title: "退款退货"
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    meta: {
      title: "查询订单"
    },
  },
  {
    path: '/afterservice',
    name: 'AfterService',
    component: () => import('../views/AfterService.vue'),
    meta: {
      title: "售后服务"
    },
  },
  {
    path: '/send',
    name: 'Send',
    component: () => import('../views/Send.vue'),
    meta: {
      title: "配送服务"
    },
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import('../views/Agreement.vue'),
    meta: {
      title: "用户协议"
    },
  },
  {
    path: '/issue',
    name: 'Issue',
    component: () => import('../views/Issue.vue'),
    meta: {
      title: "常见问题"
    },
  },
  {
    path: '/how',
    name: 'How',
    component: () => import('../views/How.vue'),
    meta: {
      title: "如何成为代理"
    },
  },
  {
    path: '/up',
    name: 'Up',
    component: () => import('../views/Up.vue'),
    meta: {
      title: "上架教程"
    },
  },
  {
    path: '/noissue',
    name: 'Noissue',
    component: () => import('../views/Noissue.vue'),
    meta: {
      title: "分销商常见问题"
    },
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/Pay.vue'),
    meta: {
      title: "我,可爱,打钱"
    },
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import('../views/Enterprise.vue'),
    meta: {
      title: "企业简介"
    },
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/Join.vue'),
    meta: {
      title: "加入我们"
    },
  },
  {
    path: '/something',
    name: 'Something',
    component: () => import('../views/Something.vue'),
    meta: {
      title: "隐私说明"
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
