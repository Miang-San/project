import React, { Component } from "react";
import DeviceMonitoring from "./containers/Device/DeviceMonitoring";
import "./App.css";

//TODO: Add routing to anothers pages
class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <DeviceMonitoring/>
      </div>
    );
  }
}

export default App;
