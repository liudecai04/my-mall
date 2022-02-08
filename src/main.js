import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false
import { Carousel,CarouselItem } from 'element-ui';
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
