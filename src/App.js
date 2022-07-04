import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

import Landing from "./components/Landing/Landing"; 
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/crop" component={Form} />
          <Route exact path="/fertlizer" component={Form} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
