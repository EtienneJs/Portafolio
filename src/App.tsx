import React from 'react';
import './App.css';
import { ContacsScreen } from './Screens/ContacsScreen';
import { InicioScreen } from './Screens/InicioScreen';
import { NavScreen } from './Screens/NavScreen';
import { PresentScreen } from './Screens/PresentScreen';
import { ProyectsScreens } from './Screens/ProyectsScreens';
import { TecnologyScreen } from './Screens/TecnologyScreen';
import './styleApp.css'

function App() {
  return (
    <div className='container-main' >
      <NavScreen/>
      <InicioScreen/>
      <PresentScreen/>
      <TecnologyScreen/>
      <ProyectsScreens/>
      <ContacsScreen/>
    </div>
  );
}

export default App;
