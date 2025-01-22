import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify'; // Import Vuetify
import 'vuetify/styles'; // Import global Vuetify styles
//import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons (optional)
//import './styles/variables.scss';

const vuetify = createVuetify(); // Create Vuetify instance

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify); // Use Vuetify in the app

app.mount('#app');