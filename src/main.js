import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// Global Component
import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import BaseInputLabel from './components/BaseInputLabel.vue'
import TheNavbar from './components/TheNavbar.vue'

const app = createApp(App)

// Global Component Registration
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('BaseInputLabel', BaseInputLabel)
app.component('TheNavbar', TheNavbar)

app.mount('#app')
