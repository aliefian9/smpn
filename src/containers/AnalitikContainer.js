import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { getLoggingList } from "../actions/inventoryAction";

import AnalitikComponent from "../components/AnalitikComponent";
import NavbarComponent from "../components/NavbarComponent";
// import PieChart from "../charts/PieChart";

class AnalitikContainer extends Component {
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
  componentDidMount() {
    this.props.dispatch(getLoggingList());
  }
  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavbarComponent />
        <AnalitikComponent />
      </div>
    );
  }
}

export default connect()(AnalitikContainer);
