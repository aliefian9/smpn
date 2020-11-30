import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { getLoggingList } from "../actions/inventoryAction";

import AnalitikComponent from "../components/AnalitikComponent"
// import PieChart from "../charts/PieChart";

class AnalitikContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getLoggingList());
  }
  render() {
    if (localStorage.getItem("token") == null) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <AnalitikComponent />
        </div>
      );
    }
  }
}

export default connect()(AnalitikContainer);