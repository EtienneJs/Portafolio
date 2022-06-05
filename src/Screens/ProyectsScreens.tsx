import React from 'react'
import proyect1 from '../Imgs/project1.png'
import proyect2 from '../Imgs/project2.png'
import '../Styles/cardp_style.css'


export const ProyectsScreens = () => {
  return (
    <div id='proyect' >
    <h2 className='text-center mt-4 mb-4'> Proyectos </h2>
   
        <div className='containerCard'>
        <div className="card">
  <img src={proyect1} className="imgClass" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Buscardor de Paises</h5>
    <p className="card-text">Es un buscardor de paises minimalista hecho con React y GraphQL</p>
    <a href="https://countrysapi.netlify.app/" target="_blank"  className="btn btn-primary me-1" rel="noreferrer">Ir a la pagina</a>
    <a href="https://github.com/eter19/KimChallenge" target="_blank"  className="btn btn-primary" rel="noreferrer">Ir al repositorio</a>
  </div>
    </div>
    <div className="card">
  <img src={proyect2} className="imgClass" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Portafolio</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://etienneportafolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
    <a href="https://github.com/eter19/Portafolio" target='_blank' className="btn btn-primary" rel="noreferrer">Ir al repositorio</a>
  </div>
    </div>
    <div className="card">
  <img src={proyect2} className="imgClass" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tienda con inventario </h5>
    <p className="card-text">Tienda hecha con React js, Nodejs con express, jwt, socket.io. </p>
    <a href="https://github.com/eter19/Ecommers" target='_blank' className="btn btn-primary" rel="noreferrer">Ir al repositorio</a>
  </div>
    </div>
        </div>
    </div>
  )
}
