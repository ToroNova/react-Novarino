import { HomeView } from "./components/HomeView/HomeView";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/Container/ItemListContainer'
import {Clock} from './ejemplo/Clock/Clock'



function App() {
  
  return (
    <>
      <NavBar logo ="TORO BURGER" />
      <ItemListContainer greeting = "HOLA CODER!" />
      <HomeView titulo = "HOLA MUNDO" contenido = "lorem" />     
      <Clock />
      {/*Footer*/}
      
           
    </>
  );
}

export default App;
