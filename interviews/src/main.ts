import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Toast from 'primevue/toast'
import ConfirmationService from 'primevue/confirmationservice'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyC8RMqWhZv19bvYDztk8_angWWt989pf_4',
  authDomain: 'interviews-cdb67.firebaseapp.com',
  projectId: 'interviews-cdb67',
  storageBucket: 'interviews-cdb67.appspot.com',
  messagingSenderId: '207393303322',
  appId: '1:207393303322:web:0cb46b3f431d23d9695aa3'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ConfirmationService)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)

app.mount('#app')
