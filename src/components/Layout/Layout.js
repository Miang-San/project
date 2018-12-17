import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import "./Layout.css";

const layout = props => {
  return (
    <Auxiliary>
      <div className={"Layout-Info"}>Informações</div>
      <main className={"Layout-Main"}>{props.children}</main>
      <div className={"Layout-Menu"}>Menu</div>
    </Auxiliary>
  );
};

export default layout;
