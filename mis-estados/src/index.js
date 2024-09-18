import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crear el contenedor root y renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
