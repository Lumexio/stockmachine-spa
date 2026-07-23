import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { Icon } from '@iconify/vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())

// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
