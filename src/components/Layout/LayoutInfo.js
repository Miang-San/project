import React from "react";
import "./Layout.css";

const layoutInfo = props => {
    return <div className="Layout-Info">{props.children}</div>;
};

export default layoutInfo;