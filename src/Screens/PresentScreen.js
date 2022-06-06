import React from 'react'
import '../Styles/present_style.css'

export const PresentScreen = ({targetPresent}) => {
  return (
    <div id='present' ref={targetPresent} className='presentCont'>
        <h2 className='text-center'>Quien soy yo?</h2>
        <div className='containerP d-flex justify-content-center'>
            <p>Soy Etienne Fernández, un programador entusiasta y empático que está dispuesto aprender, mejorar, realizar proyectos interesantes para saber que sé y que no. 
             Lo que puedo ofrecer a la empresa es ayuda al equipo, dispuesto a dar ideas para mejorar, estar en constante comunicación con equipo para saber el flujo del proyecto y lo más importante ayudar a un compañero si está estancado en un problema.      </p>
        </div>
    </div>
  )
}
