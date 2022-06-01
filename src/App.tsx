import React from 'react';
import './App.css';
import { ContacsScreen } from './Screens/ContacsScreen';
import { InicioScreen } from './Screens/InicioScreen';
import { NavScreen } from './Screens/NavScreen';
import { ProyectsScreens } from './Screens/ProyectsScreens';
import { TecnologyScreen } from './Screens/TecnologyScreen';

function App() {
  return (
    <div className='container'>
      <NavScreen/>
      <InicioScreen/>
      <TecnologyScreen/>
      <ProyectsScreens/>
      <ContacsScreen/>
    </div>
  );
}

export default App;
