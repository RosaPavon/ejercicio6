
function Footer(props) {
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
        return(
            <>
            <div key={props.index} className="card">
            <img src={props.img} alt={props.titulo}/>
            <div className="container">
            <h1>{props.titulo}</h1>
            <h2>{props.autor}</h2>
            <p>{props.descripcion}</p>                
            {props.stock==0 ? <p>No quedan copias</p>:<p>Stock: {props.stock}</p>}


            </div>
            </div>
            </>
        )
    }
    var random= catalogo[Math.floor(Math.random() * catalogo.length)]


    return (
        <>
        <div key="bibliotecassss" className="catalogo">{random}
        </div>
        </>
    );
    
  }

  
  export default Footer;