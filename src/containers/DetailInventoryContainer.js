import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getInventoryDetail } from "../actions/inventoryAction";
import DetailComponent from "../components/DetailComponent";

class DetailInventoryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getInventoryDetail(this.props.match.params.logical_uid));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Inventory</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailInventoryContainer);
