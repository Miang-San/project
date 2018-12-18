import React from "react";
import "./Layout.css";

const layoutMain = props => {
    return <div className="Layout-Main">{props.children}</div>;
};

export default layoutMain;