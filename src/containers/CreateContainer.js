import React, { Component } from "react";
import { Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import NavbarComponent from "../components/NavbarComponent";
import { connect } from "react-redux";
import { postInventoryCreate } from "../actions/inventoryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataInventory: state.inventorys.getResponDataInventory,
    errorResponDataInventory: state.inventorys.errorResponDataInventory,
  };
};

class CreateContainer extends Component {
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
  handleSubmit(data) {
    this.props.dispatch(postInventoryCreate(data));
  }

  render() {
    if (
      this.props.getResponDataInventory ||
      this.props.errorResponDataInventory
    ) {
      if (this.props.errorResponDataInventory) {
        swal("Failed!", this.props.errorResponDataInventory, "error");
      } else {
        swal(
          "Inventory Created!",
          "Nama : " +
            this.props.getResponDataInventory.nama +
            " , Umur : " +
            this.props.getResponDataInventory.umur,
          "success"
        );
      }
    }
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Create Inventory</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateContainer);
