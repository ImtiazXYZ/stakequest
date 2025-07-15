import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Update these import paths
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/style.css';
import './assets/css/bame.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);