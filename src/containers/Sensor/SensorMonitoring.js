import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import LayoutInfo from "../../components/Layout/LayoutInfo";
import LayoutMain from "../../components/Layout/LayoutMain";
import LayoutFooter from "../../components/Layout/LayoutFooter";
import DeviceModal from "./SensorModal";
import Spinner from "../../components/UI/Spinner";

class SensorMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSpinner: false
    };
  }

  footerClicked() {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      };
    });
  }

  render() {
    return (
      <Auxiliary>
        {this.state.showSpinner ? <Spinner /> : null}
        {this.state.showModal ? (
          <DeviceModal clicked={this.footerClicked.bind(this)} />
        ) : null}
        <LayoutInfo>Informações</LayoutInfo>
        <LayoutMain>Sensores</LayoutMain>
        <LayoutFooter clicked={this.footerClicked.bind(this)}>
          Rodapé
        </LayoutFooter>
      </Auxiliary>
    );
  }
}

export default SensorMonitoring;
