import React from "react";
import Modal from "../../components/UI/Modal";
import LayoutInfo from "../../components/Layout/LayoutInfo";
import LayoutMain from "../../components/Layout/LayoutMain";
import LayoutFooter from "../../components/Layout/LayoutFooter";

const DeviceModal = (props) => {
  return (
    <Modal>
      <LayoutInfo>Nome do dispositivo</LayoutInfo>
      <LayoutMain>Gráfico</LayoutMain>
      <LayoutFooter clicked={props.clicked}>Fechar</LayoutFooter>
    </Modal>
  );
};

export default DeviceModal;
