import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import Dark from "./componentes/Dark";

function App() {
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(false);

  const seleccionarClick = (val) => {
    setInput(input + val);
  };

  const evaluarClick = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Sin operacion");
    }
  };

  const deleteInput = () => {
    let string = input.toString();
    setInput(string.substring(0, string.length - 1));
  };

  return (
    <div className="app">
      <div className={`contenedor-calculadora ${dark ? "dark" : ""}`.trimEnd()}>
        <div>
          <Dark click={() => setDark(!dark)} clase={dark} />
          <Pantalla clase={dark} input={input} />
        </div>
        <div className="fila">
          <BotonClear click={() => setInput("")}>C</BotonClear>
          <BotonClear click={deleteInput}>{"<"}</BotonClear>
          <Boton click={seleccionarClick}>%</Boton>
          <Boton click={seleccionarClick}>/</Boton>
        </div>
        <div className="fila">
          <Boton click={seleccionarClick}>7</Boton>
          <Boton click={seleccionarClick}>8</Boton>
          <Boton click={seleccionarClick}>9</Boton>
          <Boton click={seleccionarClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton click={seleccionarClick}>4</Boton>
          <Boton click={seleccionarClick}>5</Boton>
          <Boton click={seleccionarClick}>6</Boton>
          <Boton click={seleccionarClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton click={seleccionarClick}>1</Boton>
          <Boton click={seleccionarClick}>2</Boton>
          <Boton click={seleccionarClick}>3</Boton>
          <Boton click={seleccionarClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton click={seleccionarClick}>00</Boton>
          <Boton click={seleccionarClick}>0</Boton>
          <Boton click={seleccionarClick}>.</Boton>
          <Boton click={evaluarClick}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
