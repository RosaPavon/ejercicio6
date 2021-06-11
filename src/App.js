
import './App.css';
import Cabecera from './Cabecera'
import Libro from './Libro'
import Footer from './Footer'
import libreria from './libreria'

function App() {
  return (
    <>
    <Cabecera/>
    <Libro libreria={libreria}/>
    <Footer libreria={libreria}/>
    </>

  );
}

export default App;
