import React from 'react'
import proyect1 from '../Imgs/project.jpg'
import './cardp_style.css'


export const ProyectsScreens = () => {
  return (
    <>
    <h2 className='text-center mt-4 mb-4'> Proyectos </h2>
    <div className='container'>
        <div className='containerCard'>
        <div className="card">
  <img src={proyect1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Proyecto 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    <div className="card">
  <img src={proyect1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Proyecto 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    <div className="card">
  <img src={proyect1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Proyecto 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
        </div>
    </div>
    </>
  )
}
