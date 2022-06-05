import React, { useRef } from 'react';
import './App.css';
import useElementOnScreen from './Parts/useElementOnScreen';
import { ContacsScreen } from './Screens/ContacsScreen';
import { InicioScreen } from './Screens/InicioScreen';
import { NavScreen } from './Screens/NavScreen';
import { PresentScreen } from './Screens/PresentScreen';
import { ProyectsScreens } from './Screens/ProyectsScreens';
import { TecnologyScreen } from './Screens/TecnologyScreen';
import './styleApp.css'
function App() {
  const targetInicio = useRef(null)
  const targetPresent = useRef(null)
  const targetecnology = useRef(null)
  const isVisibleInicio = useElementOnScreen({
    root:null,
    rootMargin:'-10px',
    threshold:0
  }, targetInicio)
  const isVisiblePresent = useElementOnScreen({
    root:null,
    rootMargin:'-10px',
    threshold:0
  }, targetPresent)

  const isVisibleTecnology = useElementOnScreen({
    root:null,
    rootMargin:'0px',
    threshold:0
  }, targetecnology)
 

  return (
    <div className='container-main' >
      <NavScreen isVisibleInicio={isVisibleInicio} isVisiblePresent={isVisiblePresent} isVisibleTecnology={isVisibleTecnology}/>
      <InicioScreen targetInicio={targetInicio}/>
      <PresentScreen targetPresent={targetPresent}/>
      <TecnologyScreen targetecnology={targetecnology}/>
      <ProyectsScreens/>
      <ContacsScreen/>
    </div>
    
  );
}

export default App;
