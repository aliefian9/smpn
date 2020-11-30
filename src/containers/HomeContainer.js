import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import JumbotronComponent from "../components/JumbotronComponent";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
    };
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
