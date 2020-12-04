import BackComponent from "../components/BackComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Container } from "reactstrap";
import FormLogging from "../components/FormLogging";
import { putLoggingUpdate } from "../actions/inventoryAction";

class EditAnalitikContainer extends Component {
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
    this.props.dispatch(putLoggingUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <NavbarComponent />
        <Container>
          <BackComponent />
          <h1>Edit Logging</h1>
          <FormLogging onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default EditAnalitikContainer;
