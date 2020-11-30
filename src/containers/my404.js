import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class my404 extends Component {
  render() {
    return (
      <div>
        <Redirect to="/"></Redirect>
      </div>
    );
  }
}
