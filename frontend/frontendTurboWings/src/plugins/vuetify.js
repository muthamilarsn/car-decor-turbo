// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Vuetify
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // For Material Design Icons

//create vuetify instance
const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light', // Default to light theme
      themes: {
        light: {
          colors: {
            primary: '#2b2d42', //dark blue
            secondary: '#00202e', //darker blue like black
            accent: '#e8eef1',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            background: '#fafafa'
          },
        },
        dark: {
          colors: {
            primary: '#008585', //light green
            secondary: '#d1dbe4', //ash grey like white
            accent: '#333333',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            background: '#101010',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  
  export default vuetify;