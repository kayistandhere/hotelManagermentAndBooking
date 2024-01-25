import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import Chart from 'chart.js';
import { Line } from 'vue-chartjs';
import Vuex from 'vuex'
import store from './store/index.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App).use(router)
// Axios
app.use(VueAxios, { $request: axios})
app.use(Chart)
// Vuex
app.use(Vuex)
// Store to Vuex
app.use(store)
app.use(VueSweetalert2)
app.mount('#app')
app.use(Line)