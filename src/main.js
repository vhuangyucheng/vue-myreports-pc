import {createPinia} from 'pinia'
import myRouter from './router'
import {createApp} from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import print from 'vue3-print-nb'
const app = createApp(App)
const pinia = createPinia()
// Global instruction
app.use(print);

app.use(pinia)
app.use(myRouter)
app.use(Antd)
app.mount('#app')
