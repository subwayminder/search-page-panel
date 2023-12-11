import { createApp, markRaw } from 'vue'
import './style.css'

// Element plus
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/container/style/css'

// QUASAR
import { Quasar } from 'quasar'

// DEBOUNCE
import { vue3Debounce } from 'vue-debounce'

// ROUTER
import router from "src/router";

import './scss/index.scss'
import App from './App.vue'

// PINIA
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})

createApp(App)
    .use(router)
    .use(pinia)
    .directive('debounce', vue3Debounce({ lock: true }))
    .use(Quasar, {})
    .mount('#app')