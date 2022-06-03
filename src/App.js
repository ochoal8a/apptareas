import "./App.css";
import freeLogo from "./images/freecodecamp-logo.png";
import ListaDeTareas from "./components/ListaTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img alt="freeLogo" src={freeLogo} className="freeLogo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
