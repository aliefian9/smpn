import React, { Component } from "react";
import { connect } from "react-redux";
import JumbotronComponent from '../components/JumbotronComponent'

class HomeContainer extends Component {


  render() {
    
    return (
      <div>
        <JumbotronComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
