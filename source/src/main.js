import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import auth from './mixin/auth.js'
import Vuex from 'vuex'
import store from './store/store.js'
//pagination
// import LaravelVuePagination from 'laravel-vue-pagination'
// var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration

const app = createApp(App)
// router
.use(router)
// Axios
app.use(VueAxios, { $request: axios})
// Vuex
app.use(Vuex)
// Store to Vuex
app.use(store)
// Notification
app.use(auth)
app.use(VueSweetalert2)
app.mount('#app')

// app.component('Pagination' , LaravelVuePagination)