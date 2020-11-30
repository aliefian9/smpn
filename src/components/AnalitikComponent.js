import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { Container, Row, Col, Spinner } from "reactstrap";

import { connect } from "react-redux";

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
  };
};

const AnalitikComponent = (props) => {
  const columns = [
    {
      dataField: "logical_uid",
      text: "Logical UID",
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
        <ToolkitProvider
          bootstrap4
          keyField="logical_uid"
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
