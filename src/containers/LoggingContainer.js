import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import LoggingComponent from "../components/LoggingComponent";
import { getLoggingList } from "../actions/inventoryAction";

class LoggingContainer extends Component {
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
        <LoggingComponent />
      </div>
    );
  }
}

export default connect()(LoggingContainer);
