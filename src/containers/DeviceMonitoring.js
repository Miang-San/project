import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";
import LayoutInfo from "../components/Layout/LayoutInfo";
import LayoutMain from "../components/Layout/LayoutMain";
import LayoutFooter from "../components/Layout/LayoutFooter";
import Modal from "../components/UI/Modal";


class DeviceMonitoring extends Component {
  render() {
    return (
      <Auxiliary>
        <Modal/>
        <LayoutInfo>Informações</LayoutInfo>
        <LayoutMain>Conteúdo</LayoutMain>
        <LayoutFooter>Rodapé</LayoutFooter>
      </Auxiliary>
    );
  }
}

export default DeviceMonitoring;
