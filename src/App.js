import {Route, Routes} from 'react-router-dom'
import { Fragment } from 'react';
import {Navigation} from './Routes/Navigation/navigation'
import { Footer } from './components/footer/Footer';
import React from 'react';
import Inicio from './components/init/Inicio';
import Reserva from './components/reserva/Reserva';
import Menu from './components/menu/Menu'
import Bridge from './components/wall/Bridge';
import './App.css';
import './Routes/Navigation/navigation.css'





function App() {
  
  

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>          
          <Route index element={<Inicio />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reserva' element={<Reserva />} />
          <Route path='/muro' element={<Bridge />} />
        </Route>
        
      </Routes>
      <Footer />
      </Fragment>
      
  );
}

export default App;
 // useState : Para el formulario, enviar datos del formulario. Para hacer cambios.  UseEffect : Coleccion de cartas, para hacer el llamado en el menu.  Axios para react , UseContext
 // midudev
 