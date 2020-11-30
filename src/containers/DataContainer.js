import React, { Component } from "react";
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

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
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
    return (
      <div>
        <NavbarComponent />
        <TableComponent />
      </div>
    );
  }
}

export default connect()(DataContainer);
