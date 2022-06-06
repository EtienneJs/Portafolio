/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import iconJwt from '../Imgs/IconJwt.png'
import iconExpress from '../Imgs/Expressjs.png'
import iconMysql from '../Imgs/mysql.png'
import iconType from '../Imgs/ts.png'
import '../Styles/Tecnology_style.css'

export const TecnologyScreen = ({targetecnology}) => {
  return (
      <div id='tec' ref={targetecnology}>
    <h2 className='text-center mb-3 mt-5'> Tecnologias </h2>
      <h3 className='text-center'> Principales </h3>
 
      
    <div className='oneCard'>
      <div className='card_custom'><a href='https://developer.mozilla.org/es/docs/Glossary/HTML5' target='_blank' rel="noreferrer"><i className="fa-brands fa-html5"></i><p>HTML5</p></a></div>
      <div className='card_custom'><a href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank'><i className="fa-brands fa-css3-alt"></i><p>CSS3</p></a></div>
      <div className='card_custom'><a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank'><i className="fa-brands fa-js"></i><p>JAVASCRIPT</p></a></div>
      <div className='card_custom'><a href='https://es.reactjs.org/docs/getting-started.html' target='_blank'><i className="fa-brands fa-react"></i><p>REACTJS</p></a></div>
      <div className='card_custom'><a href='https://nodejs.org/es/docs/' target='_blank'><i className="fa-brands fa-node-js"></i><p>NODEJS</p></a></div>
    </div>
      <h3 className='text-center mt-4 mb-4'>Otras</h3>
    <div className='twoCard'>
      <div className='card_custom'> <a href='https://getbootstrap.com/docs/5.2/getting-started/introduction/' target='+blank'><i className="fa-brands fa-bootstrap iconTwo"></i></a> <p>Bootstrap</p></div>
      <div className='card_custom'> <a href='https://jwt.io/introduction'><img className='iconTwo ' src={iconJwt} alt='iconJwt'/> <p>JWT</p></a></div>
      <div className='card_custom'> <a href='https://expressjs.com/es/starter/installing.html' target='_blank'><img className='iconTwo iconExpress' src={iconExpress} alt='iconExpress'/><p>Express</p></a> </div>
      <div className='card_custom'> <a href='https://dev.mysql.com/doc/' target='_blank'><img className='iconTwo ' src={iconMysql} alt='Mysql Icon'/><p>MySql</p></a></div>
      <div className='card_custom'> <a href='https://www.typescriptlang.org/docs/' target='_blank'><img className='iconTwo icontType' src={iconType} alt='iconType'/> <p>TypeScript</p></a></div>
    </div>
      </div>
  )
}
