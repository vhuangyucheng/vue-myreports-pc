import {createPinia} from 'pinia'
import myRouter from './router'
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(myRouter)
app.mount('#app')
