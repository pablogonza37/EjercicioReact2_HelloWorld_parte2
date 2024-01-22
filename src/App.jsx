import "bootstrap/dist/css/bootstrap.min.css";
import TituloProps from './components/TituloProps';
import Container from 'react-bootstrap/Container';
import './App.css'

function App() {
 

  return (
    <Container>
      <TituloProps mensajeProps='my friend'></TituloProps>
    </Container>
  )
}

export default App
