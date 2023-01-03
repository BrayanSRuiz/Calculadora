import React from "react";
import "./BotonClear.css";

const BotonClear = (props) => {
  return (
    <div onClick={props.click} className="boton-clear">
      {props.children}
    </div>
  );
};

export default BotonClear;
