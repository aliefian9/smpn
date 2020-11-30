import BackComponent from "../components/BackComponent";
import NavbarComponent from "../components/NavbarComponent";

import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import {
  getInventoryDetail,
  putInventoryUpdate,
} from "../actions/inventoryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataInventory: state.inventorys.getResponDataInventory,
    errorResponDataInventory: state.inventorys.errorResponDataInventory,
  };
};

class EditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getInventoryDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putInventoryUpdate(data, this.props.match.params.id));
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
          "Inventory Updated!",
          "Nama : " +
            this.props.getResponDataInventory.name +
            " , Jumlah : " +
            this.props.getResponDataInventory.qty,
          "success"
        );
      }
    }
    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Edit Inventory</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(EditContainer);
