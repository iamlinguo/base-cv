import { createApp } from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.less'
import '@/router/permission'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
createApp(App)
    .use(router)
    .use(Antd)
    .mount('#app')
