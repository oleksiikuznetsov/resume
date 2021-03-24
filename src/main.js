import Vue from 'vue';
import VueDashboard from 'vue-dashboard-vd';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueDashboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');