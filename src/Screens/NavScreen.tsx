import React, { useState } from 'react'
import '../Styles/navbar_styles.css'
import { btnActiveInitial } from '../type';
interface FormState {
  btnActive:btnActiveInitial
}
const initialStateBtnActive = {
  inicio: false,
  presentacion:false,
  tecnologias:false,
  proyectos:false,
  contactos:false
}

export const NavScreen = () => {
  const [menu, setMenu] = useState({
    menuOpen:false,
    btnClose:false,
    btnOpen:true
  })
  const [btnActive, setBtnActive] = useState<FormState['btnActive']>(initialStateBtnActive)


  const handleBtnActive = (e:React.FormEvent<HTMLAnchorElement>) =>{
    const menuItem = e.currentTarget.text.toLowerCase()
    setBtnActive({
      ...initialStateBtnActive,
      [menuItem]: true
    })
  }
  const handleMenu =()=>{

    if(menu.btnOpen === true){
      setMenu({
        menuOpen:true,
        btnClose:true,
        btnOpen:false
      })
    } else {
      setMenu({
        menuOpen:false,
        btnClose:false,
        btnOpen:true
      })
    }
  } 
  return (
    <>
        <div className='d-flex justify-content-start align-items-center navbar_ul'>
        <i onClick={handleMenu} className={menu.btnOpen ? "fa-solid fa-bars" : "classNoc"}></i>
          <div  className={menu.menuOpen ? "d-flex flex-column menuC" : "classNoc"}>
          <a className={btnActive.inicio ? 'btnActive': ''} onClick={handleBtnActive}  href='#inicio'>
            Inicio
          </a>
          <a className={btnActive.presentacion ? 'btnActive': ''} onClick={handleBtnActive}  href='#present'>
            Presentacion
          </a>
          <a  className={btnActive.tecnologias ? 'btnActive': ''} onClick={handleBtnActive}  href='#tec'>
            Tecnologias
          </a>
          <a  className={btnActive.proyectos ? 'btnActive': ''} onClick={handleBtnActive} href='#proyect'>
            Proyectos
          </a>
          <a  className={btnActive.contactos ? 'btnActive': ''} onClick={handleBtnActive} href='#contac'>
            Contactos
          </a>
          </div>
          <i onClick={handleMenu} className={menu.btnClose ? "fa-solid fa-circle-xmark": 'classNoc'}></i>
        </div>
       
    </>
  )
}
