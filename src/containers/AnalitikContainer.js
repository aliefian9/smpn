import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PieChart from "../charts/PieChart";


export default class AnalitikInventoryContainer extends Component {
  render() {
    if (localStorage.getItem("token") == null) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h1> ANALITIK</h1>
          <PieChart />
        </div>
      );
    }
  }
}
