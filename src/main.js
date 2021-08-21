import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'
import Validation from './includes/validation'
import { auth } from './firebase'
// Global Component
import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import BaseInputLabel from './components/BaseInputLabel.vue'
import TheNavbar from './components/TheNavbar.vue'

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(Validation)

    // Global Component Registration
    app.component('BaseButton', BaseButton)
    app.component('BaseInput', BaseInput)
    app.component('BaseInputLabel', BaseInputLabel)
    app.component('TheNavbar', TheNavbar)

    app.mount('#app')
  }
})
