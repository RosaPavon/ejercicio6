import libreria from './libreria'
import React, {useState} from "react"

function Cabecera() {
    const[vip, setVip] = useState(false)

    const click =() =>{
       setVip( prev=> !prev)}
        return (
            <> 
          <img src={libreria.usuario.imagen} />
          <h4>{libreria.usuario.nombre} </h4>
          {vip ? <p>Hola caracola</p>:<p></p>}
          <button onClick={click}>VIP</button>
     
        
            </>
        );

    
    
  }
  
  export default Cabecera;