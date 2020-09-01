import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/iconfont.css'
import './assets/styles/main.css'

import DescCard from './components/DescCard'
import DescLine from './components/DescLine'
import ViewBanner from './components/banner'
import LayoutView from './views/LayoutView.vue'

Vue.component("desc-card", DescCard);
Vue.component("desc-line", DescLine);
Vue.component("view-banner", ViewBanner);
Vue.component("layout-view", LayoutView);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
