import { createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { TextField } from "@mui/material";
import "./App.css";
import Data from "./Data";

export const contexto = createContext(null);

function App() {
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function notEmpty() {
    if (name === "") {
      setMensaje("El campo de nombre está vacío, llenalo para continuar");
      setError(true);
      setExito(false)
    } else {
      setMensaje("");
      setError(false);
      setName(e.target.value);
    }
  }

  function passwordSize(e) {
    if (e.target.value.length < 6) {
      setMensaje("La contraseña debe contener al menos 6 caracteres");
      setError(true);
    } else {
      setMensaje("");
      setError(false);
      setPass(e.target.value);
    }
  }

  function send(e) {
    e.preventDefault();
    if (error) {
      setMensaje("Algo salió mal, intentalo nuevamente");
      setExito(false);
    } else if ( pass === "" || email === "") {
      setMensaje("Campos vacios");
      setExito(false);
    } else if(name === ""){
      setMensaje("El campo de nombre está vacío, llenalo para continuar");
      setError(true);
      setExito(false);
    } else {
      setExito(true);
    }
  }

  return (
    <>
      <div id="main-container" className={`${exito ? "gone" : "here"}`}>
        <h1>Iniciar Sesión</h1>
        <TextField label="Nombre" onChange={(e) => setName(e.target.value)} fullWidth className="input" />
        <TextField
          type="password"
          label="Contraseña"
          onChange={passwordSize}
          className="input"
          fullWidth
        />
        <TextField
          type="email"
          label="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          fullWidth
        />
        <button onClick={send}>Registrar</button>
        <br />
        <div className={`${error ? "here" : "gone"} alert`}>¡{mensaje}!</div>
      </div>
      <div id="vista-container" className={`${exito ? "here" : "gone"}`}>
        <Data name={name} pass={pass} email={email}/>
      </div>
    </>
  );
}

export default App;
