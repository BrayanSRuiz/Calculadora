import React from "react";
import "./Dark.css";

const Dark = ({ click, clase }) => {
  return (
    <div
      onClick={click}
      className={`theme-toggler ${clase ? "active" : ""}`.trimEnd()}
    ></div>
  );
};

export default Dark;
