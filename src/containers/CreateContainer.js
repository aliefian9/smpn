import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
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
  handleSubmit(data) {
    this.props.dispatch(postInventoryCreate(data));
  }

  render() {
    if (this.props.getResponDataInventory || this.props.errorResponDataInventory) {
      if(this.props.errorResponDataInventory)
      {
        swal(
            "Failed!",
            this.props.errorResponDataInventory,
            "error"
          );
      }else {
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
    return (
      <Container>
        <BackComponent />
        <h1>Create Inventory</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateContainer);
