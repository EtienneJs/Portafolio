import React from 'react'
import iconJwt from '../Imgs/IconJwt.png'
import iconExpress from '../Imgs/Expressjs.png'
import iconMysql from '../Imgs/mysql.png'
import iconType from '../Imgs/ts.png'
import './Tecnology_style.css'

export const TecnologyScreen = () => {
  return (
      <div id='tec'>
    <h2 className='text-center mb-3 mt-5'> Tecnologias </h2>
      <h3 className='text-center'> Principales </h3>
    <div className='oneCard'>
      <div className='card_custom'><i className="fa-brands fa-html5"></i><p>HTML5</p></div>
      <div className='card_custom'><i className="fa-brands fa-css3-alt"></i><p>CSS3</p></div>
      <div className='card_custom'><i className="fa-brands fa-js"></i><p>JAVASCRIPT</p></div>
      <div className='card_custom'><i className="fa-brands fa-react"></i><p>REACTJS</p></div>
      <div className='card_custom'><i className="fa-brands fa-node-js"></i><p>NODEJS</p></div>
    </div>
      <h3 className='text-center mt-4 mb-4'>Otras</h3>
    <div className='twoCard'>
      <div className='card_custom'> <i className="fa-brands fa-bootstrap iconTwo"></i> <p>Bootstrap</p></div>
      <div className='card_custom'> <img className='iconTwo ' src={iconJwt} alt='iconJwt'/> <p>JWT</p></div>
      <div className='card_custom'> <img className='iconTwo iconExpress' src={iconExpress} alt='iconExpress'/><p>Express</p> </div>
      <div className='card_custom'> <img className='iconTwo ' src={iconMysql} alt='Mysql Icon'/><p>MySql</p></div>
      <div className='card_custom'> <img className='iconTwo icontType' src={iconType} alt='iconType'/> <p>TypeScript</p></div>
    </div>
      </div>
  )
}
