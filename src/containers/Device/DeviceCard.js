import React from "react";
import "./DeviceCard.css";

const DeviceCard = props => {
  return (
    <div className={"Card"}>
      <div className={"CardTemp"}>°C</div>
      <div className={"CardInfos"}>
        <div className={"CardInfo"}>{"<< Nome do Dispositivo >>"}</div>
        <div className={"CardInfo"}>{"<< Nome da Agenda >>"}</div>
      </div>
    </div>
  );
};

export default DeviceCard;
