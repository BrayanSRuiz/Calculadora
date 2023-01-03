import React from "react";
import "./Boton.css";

const Boton = (props) => {
  const isOperador = (valor) => {
    return isNaN(valor) && valor !== ".";
  };
  return (
    <div
      onClick={() => props.click(props.children)}
      className={`boton ${
        isOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
};

export default Boton;
