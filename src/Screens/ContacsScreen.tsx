import React from 'react'
import './contac_style.css'
export const ContacsScreen = () => {
  return (
    <div id='contac' className='container'>
      <h2 className='text-center mt-4 mb-4'> Contactos </h2>
      <div className='containerContacs mt-4 mb-4'>
        <div><i className="fa-brands fa-github"></i> <p>GitHub</p></div>
        <div><i className="fa-brands fa-linkedin"></i><p>LinkedIn</p></div>
        <div><i className="fa-solid fa-envelope"></i><p>Mail</p></div>
      </div>
    </div>
  )
}
