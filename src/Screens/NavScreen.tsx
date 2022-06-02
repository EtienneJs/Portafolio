import React from 'react'
import './navbar_styles.css'

export const NavScreen = () => {
  return (
    <div>
        <ul className='d-flex justify-content-center navbar_ul'>
          <li className='text-decoration-none'>
            Inicio
          </li>
          <li>
            Presentacion
          </li>
          <li>
            Tecnologias
          </li>
          <li>
            Proyectos
          </li>
          <li>
            Contacto
          </li>
        </ul>
    </div>
  )
}
