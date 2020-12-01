import React from "react";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getLoggingList: state.inventorys.getLoggingList,
    errorLoggingList: state.inventorys.errorLoggingList,
  };
};

const CounterAnalitik = (props) => {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="text-center">
            <Card.Title>JUMLAH LOGGING</Card.Title>
            <Card.Text> {props.getLoggingList}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(CounterAnalitik);
