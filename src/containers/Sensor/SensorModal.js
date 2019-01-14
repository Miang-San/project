import React from "react";
import Modal from "../../components/UI/Modal";
import LayoutInfo from "../../components/Layout/LayoutInfo";
import LayoutMain from "../../components/Layout/LayoutMain";
import LayoutFooter from "../../components/Layout/LayoutFooter";

const SensorModal = (props) => {
  return (
    <Modal>
      <LayoutInfo>Nome do Sensor</LayoutInfo>
      <LayoutMain>Gráfico</LayoutMain>
      <LayoutFooter clicked={props.clicked}>Fechar</LayoutFooter>
    </Modal>
  );
};

export default SensorModal;
