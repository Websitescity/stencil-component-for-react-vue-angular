import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements as defineMyComponent } from "my-component-stencil/dist/loader";

defineMyComponent(window);
Vue.config.ignoredElements = [/^my-/];
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
