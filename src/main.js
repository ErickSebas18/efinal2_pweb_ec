import { createApp } from 'vue'
import App from './App.vue'
import router from '@/modules/module/Router/router'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

createApp(App).use(router).mount('#app')
