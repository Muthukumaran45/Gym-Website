import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// Bootstrap link
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// css link
import './style.css';


// Animation link
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

