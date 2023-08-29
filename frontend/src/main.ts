import { createApp } from 'vue'
import store from './store/store'
import App from './App.vue'
import router from './router'
import productsData from './phones.json'

store.dispatch('initializeProducts', productsData)

createApp(App).use(router).use(store).mount('#app')
