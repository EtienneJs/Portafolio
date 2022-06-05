import  {  useState } from 'react'
import '../Styles/navbar_styles.css'



export const NavScreen = ({isVisibleInicio, isVisiblePresent, isVisibleTecnology,isVisibleProyect,isVisibleContac}) => {
  console.log(isVisibleTecnology)
  const [menu, setMenu] = useState({
    menuOpen:false,
    btnClose:false,
    btnOpen:true
  })
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
  console.log(isVisibleContac)

  return (
    <>
        <div className='d-flex justify-content-start align-items-center navbar_ul'>
        <i onClick={handleMenu} className={menu.btnOpen ? "fa-solid fa-bars" : "classNoc"}></i>
          <div  className={menu.menuOpen ? "d-flex flex-column menuC" : "classNoc"}>
          <a className={ isVisibleInicio ? 'btnActive normal': 'normal'  }   href='#inicio'>
            Inicio
          </a>
          <a className={ isVisibleInicio  ? ' normal': isVisiblePresent ? ' btnActive normal':'normal'}   href='#present'>
            Presentacion
          </a>
          <a  className={ isVisibleInicio  ? ' normal':isVisiblePresent ? 'normal':isVisibleTecnology ? ' btnActive normal':'normal'}   href='#tec'>
            Tecnologias
          </a>
          <a  className={isVisibleTecnology ? 'normal': isVisibleContac ? 'normal':isVisibleProyect ? 'btnActive normal':'normal'}  href='#proyect'>
            Proyectos
          </a>
          <a  className={ isVisibleContac ? 'btnActive normal':'normal'}  href='#contac'>
            Contactos
          </a>
          </div>
          <i onClick={handleMenu} className={menu.btnClose ? "fa-solid fa-circle-xmark": 'classNoc'}></i>
        </div>
    </>
  )
}
