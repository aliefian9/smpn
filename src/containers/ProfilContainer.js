import React, { Component } from "react";
import ProfilComponent from "../components/ProfilComponent";
import NavbarComponent from "../components/NavbarComponent";


export default class ProflContainer extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <ProfilComponent />
      </div>
    );
  }
}
