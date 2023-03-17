import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { List,Cell,Sticky  } from 'vant'
import 'vant/lib/index.css'
import './styles/index.css'
// import './utils/mock'

const app = createApp(App as any)
app.use(router)
app.use(createPinia())
app.use(List)
app.use(Cell)
app.use(Sticky)
app.mount('#app')
