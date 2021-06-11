import { useState } from "react";

function Libro(props) {
        const catalogo= props.libreria.libros.map((libro, index)=>{
            return (
                <Tarjeta 
                index={index}
                titulo={libro.titulo}
                autor={libro.autor}
                img={libro.img}
                descripcion={libro.descripcion}
                stock={libro.stock}
                />
            );
    
        })
    
        function Tarjeta(props){
            let [stock, setStock]=useState(props.stock)
        
            return(
                <>
                <div key={props.index} className="card">
                <img src={props.img} alt={props.titulo}/>
                <div className="container">
                <h1>{props.titulo}</h1>
                <h2>{props.autor}</h2>
                <p>{props.descripcion}</p>                
                {stock==0 ? <p>No quedan copias</p>:<p>Stock: {stock}</p>}
                <button onClick={()=>{setStock(stock -1)}}>Click</button>


                </div>
                </div>
                </>
            )
        }
    
        return (
            <>
            <div key="biblioteca" className="catalogo">{catalogo}
            </div>
            </>
        );
        
      }
  export default Libro;