import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getInventoryList, deleteDataInventory } from '../actions/inventoryAction'

class DataContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getInventoryList());
        this.props.dispatch(deleteDataInventory());
      }
    
      render() {
        
        return (
          <div>
            <TableComponent />
          </div>
        );
      }
    }

export default connect()(DataContainer);