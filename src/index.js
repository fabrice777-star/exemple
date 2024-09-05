// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assurez-vous que ce fichier existe pour les styles globaux
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; // Importer la configuration i18next

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
