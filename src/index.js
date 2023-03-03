import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);

// en portada:
// Hacer que la notificación de envío sea más notoria
//  Mejorar los tamaños del slider y del formulario, que se vea mejor.
// en menú: 
// traerme un menú de firebase para mostrar. 
// Reservas: dejar los números de contacto, que se vean bien y el formulario, mejorar en estilos
// el muro: que funcione!! 