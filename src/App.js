import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import CreateContainer from "./containers/CreateContainer";
import EditContainer from "./containers/EditContainer";
import DetailContainer from "./containers/DetailContainer";
import DataContainer from "./containers/DataContainer";
import ProfilContainer from "./containers/ProfilContainer";
import LoginContainer from "./containers/LoginContainer";
import AnalitikContainer from "./containers/AnalitikContainer";
import xhasjahw1 from "./containers/Logout";
import my404 from "./containers/my404";

class App extends Component {
  constructor(props) {
    super(props);
    const roleuser1 = localStorage.getItem("roleuser1");

    this.state = {
      roleuser1,
    };
  }

  render() {
    if (this.state.roleuser1 === "29,30,31,32,33,34,35,36") {
      return (
        <div>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginContainer} />
            <Route path="/Home" exact component={HomeContainer} />
            <Route path="/Create" exact component={CreateContainer} />
            <Route path="/Detail/:logical_uid" component={DetailContainer} />
            <Route path="/Edit/:logical_uid" exact component={EditContainer} />
            <Route path="/Data" exact component={DataContainer} />
            <Route path="/Analitik" exact component={AnalitikContainer} />
            <Route path="/Profil" exact component={ProfilContainer} />
            <Route path="/xhasjahw1" exact component={xhasjahw1} />
            <Route path="*" exact component={my404} />
          </Switch>
        </Router>
      </div>
      );
    } else {
      return (
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <Route path="/Home" exact component={HomeContainer} />
          <Route path="/Detail/:logical_uid" component={DetailContainer} />
          <Route path="/Data" exact component={DataContainer} />
          <Route path="/Analitik" exact component={AnalitikContainer} />
          <Route path="/xhasjahw1" exact component={xhasjahw1} />
          <Route path="*" exact component={my404} />
        </Switch>
      </Router>
    </div>
    );
    }


 
  }
}

export default App;
