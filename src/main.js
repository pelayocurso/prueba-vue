import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  created() {
    window.Vue = this;
  },

  render: h => h(App)
})
