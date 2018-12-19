import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className={"Spinner"}>
      <div className={"lds-dual-ring"} />
    </div>
  );
};

export default Spinner;
