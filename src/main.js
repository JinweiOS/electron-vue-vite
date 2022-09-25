import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { $emit, TypeSet } from './EventBus'

window.addEventListener('resize', () => {
  $emit(TypeSet.resize)
})

createApp(App).mount('#app')
