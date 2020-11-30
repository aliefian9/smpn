import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
    localStorage.removeItem("roleuser1");
  }
  render() {
    return (
      <div>
        <Redirect to="/"></Redirect>
      </div>
    );
  }
}
