import React from "react";
import "./Pantalla.css";

const Pantalla = ({ input, clase }) => {
  return (
    <div className={`pantalla ${clase ? "dark" : ""}`.trimEnd()}>{input}</div>
  );
};

export default Pantalla;
