// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// style
require('./assets/vendors/base/vendors.bundle.css')
require('./assets/demo/demo6/base/style.bundle.css')

// js
require('./assets/vendors/base/vendors.bundle.js')
require('./assets/demo/demo6/base/scripts.bundle.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
