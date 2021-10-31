import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/cropper/cropper.min.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/bootstrap-theme.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.css'
import './assets/css/global.css'
import './assets/css/iconfont.css'
import './assets/css/login.css'
import './assets/css/styles.css'
import './assets/css/swiper.min.css'
import './assets/css/zebra.datepicker.css'
import ElementUI from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
