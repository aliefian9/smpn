import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { Container, Row, Col, Spinner } from "reactstrap";
import { Card } from "react-bootstrap";

import { connect } from "react-redux";
var today = new Date(),
  date =
    today.getDate() +
    " - " +
    (today.getMonth() + 1) +
    " - " +
    today.getFullYear(),
  time = today.getHours() + " : " + today.getUTCMinutes();

const { SearchBar } = Search;
const defaultSorted = [
  {
    dataField: "logical_uid",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getLoggingList: state.inventorys.getLoggingList,
    errorLoggingList: state.inventorys.errorLoggingList,
    HitungLogging: state.inventorys.getLoggingList.length, //HITUNG JUMLAH DATA LOGGING
  };
};

const AnalitikComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "qty",
      text: "Jumlah",
      sort: true,
    },
    {
      dataField: "time",
      text: "Waktu",
      sort: true,
    },
  ];
  return (
    <Container>
      {props.getLoggingList ? (
        <div>
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getLoggingList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <div className="float-right">
                      <SearchBar {...props.searchProps} placeholder="Cari.." />
                    </div>
                  </Col>
                </Row>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
          {date} <br /> {time}
          {/* BUAT NAMPILIN LOGGING */}
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>JUMLAH LOGGING</Card.Title>
              <Card.Text>{props.HitungLogging}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="text-center">
          {props.errorLoggingList ? (
            <h4>{props.errorLoggingList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(AnalitikComponent);
