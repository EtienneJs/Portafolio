import '../Styles/inicio_style.css'
export const InicioScreen = ({targetInicio}) => {


 
  return (
    <div id='inicio' ref={targetInicio} className='BackImg'>
       <h1>
       <span className='content1 '>Etienne Fernandez</span>
        <span className='content2 '>Desarrollador Web FullStack</span>
        <span className='content3 '>MERN</span>
    
       </h1>
    </div>
  )
}
