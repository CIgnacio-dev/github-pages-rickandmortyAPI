import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')