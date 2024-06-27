import { createApp, App as Application } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

/*
import "../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/libs/simplebar/dist/simplebar.min.js";
import "../assets/js/theme/theme.js";

import "../assets/iconify/iconify-icon.min.js";
*/

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app : Application = createApp(App);

app.use(router);
app.mount('#app');
