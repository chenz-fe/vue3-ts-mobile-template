import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { List as VantList } from 'vant'
import 'vant/lib/index.css'
import './styles/index.css'
// import './utils/mock'

const app = createApp(App as any)
app.use(router)
app.use(createPinia())
app.use(VantList)
app.mount('#app')
