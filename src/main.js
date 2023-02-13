import Vue from 'vue'
import App from './App.vue'
import '/src/assets/styles/global.scss'
import breakpoints from "@/plugins/breakponts.js"

Vue.config.productionTip = false

Vue.use(breakpoints)

new Vue({
  render: h => h(App),
}).$mount('#app')
