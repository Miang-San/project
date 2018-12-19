import React from "react";
import "./Layout.css";

const layoutFooter = props => {
  return <div className="Layout-Footer" onClick={props.clicked}>{props.children}</div>;
};

export default layoutFooter;
