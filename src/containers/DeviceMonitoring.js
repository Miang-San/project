import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";
import LayoutInfo from "../components/Layout/LayoutInfo";
import LayoutMain from "../components/Layout/LayoutMain";
import LayoutFooter from "../components/Layout/LayoutFooter";
import Modal from "../components/UI/Modal";
import Spinner from '../components/UI/Spinner'

class DeviceMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  footerClicked() {
    console.log(this.state.showModal);
    let prevState = this.state.showModal;
    this.setState({
      showModal: !prevState
    });
  }

  render() {
    return (
      <Auxiliary>
        <Spinner/>
        {this.state.showModal ? <Modal /> : null}
        <LayoutInfo>Informações</LayoutInfo>
        <LayoutMain>Conteúdo</LayoutMain>
        <LayoutFooter clicked={this.footerClicked.bind(this)}>
          Rodapé
        </LayoutFooter>
      </Auxiliary>
    );
  }
}

export default DeviceMonitoring;
