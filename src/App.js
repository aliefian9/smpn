import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import HomeContainer from "./containers/HomeContainer";
import CreateContainer from "./containers/CreateContainer";
import EditContainer from "./containers/EditContainer";
import DetailContainer from "./containers/DetailContainer";
import DataContainer from "./containers/DataContainer";

import LoginContainer from "./containers/LoginContainer";
import AnalitikContainer from "./containers/AnalitikContainer";
import Logout from "./containers/Logout";

// const mapStateToProps = (state) => {
//   return {
//     getUserLogin: state.inventorys.getUserLogin,
//     errorUserLogin: state.inventorys.errorUserLogin,
//   };
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: true,
    };
  }

  render() {
    if (localStorage.getItem("token") == null) {
      return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={LoginContainer} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <NavbarComponent />
          <Router>
            <Switch>
              <Route path="/Home" exact component={HomeContainer} />
              <Route
                path="/Create"
                exact
                component={CreateContainer}
              />
              <Route
                path="/Detail/:logical_uid"
                exact
                component={DetailContainer}
              />
              <Route
                path="/Edit/:logical_uid"
                exact
                component={EditContainer}
              />
              <Route path="/Data" exact component={DataContainer} />
              <Route
                path="/Analitik"
                exact
                component={AnalitikContainer}
              />
              <Route path="/Logout" exact component={Logout} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

export default App;
// export default connect(mapStateToProps, null)(App);
