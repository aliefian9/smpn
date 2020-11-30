import React, { Component } from "react";
import TableComponent2 from "../components/TableComponent2";
import TableComponent from "../components/TableComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getInventoryList,
  deleteDataInventory,
} from "../actions/inventoryAction";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const roleuser1 = localStorage.getItem("roleuser1");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
      roleuser1,
    };
  }
  componentDidMount() {
    this.props.dispatch(getInventoryList());
    this.props.dispatch(deleteDataInventory());
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    if (this.state.roleuser1 === "29,30,31,32,33,34,35,36") {
      return (
        <div>
          <NavbarComponent />
          <TableComponent />
        </div>
      );
    } else {
      return (
        <div>
          <NavbarComponent />
          <TableComponent2 />
        </div>
      );
    }
  }
}

export default connect()(DataContainer);
