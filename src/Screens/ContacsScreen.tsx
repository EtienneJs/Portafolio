import React from 'react'
import '../Styles/contac_style.css'
export const ContacsScreen = () => {
  return (
    <div id='contac' className='container'>
      <h2 className='text-center mt-4 mb-4'> Contactos </h2>
      <div className='containerContacs mt-4 mb-4'>
        <a href='https://github.com/eter19' target='_blanck'><i className="fa-brands fa-github"></i> <p>Etienne Fernandez</p></a>
        <a href='https://www.linkedin.com/in/etienne-fernandez-guajardo-74177a224/' target='_blanck'><i className="fa-brands fa-linkedin"></i><p>LinkedIn</p></a>
        <div className='a'><i className="fa-solid fa-envelope"></i><p>Mail</p></div>
      </div>
    </div>
  )
}
