import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route} from "react-router-dom";





function App() {
  
  return (
    <>
     <BrowserRouter>
        <NavBar logo ="TORO BURGER" />
     
      <Switch>
        <Route exact path="/">
            <h1>PAGINA DE INICIO</h1>
            <ItemListContainer/>
        </Route>

        <Route exact path="/productos/:categoryId">
            <h1>PRODUCTOS</h1>
            <ItemListContainer/>
        </Route>

        <Route exact path="/productos/:categoryId">
            <h1>PRODUCTOS</h1>
            <ItemListContainer/>
        </Route>

        <Route exact path="/contacto">
            <h1>CONTACTO</h1>
        </Route>

        <Route exact path="/cart">
            {/*VISTA CARRITO*/}
            <h1>CARRITO</h1>            
        </Route>

        <Route path="*">
            <h1>404 NO ENCONTRADO</h1>
            <button>VOLVER AL INICIO</button>
        </Route>
        
      </Switch>
      {/*Footer*/}
    </BrowserRouter> 
           
    </>
  );
}

export default App;
