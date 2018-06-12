import React, { Component } from "react";
import logo from "./logo.svg";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <Link to="/">Route 1</Link>
            <Link to="/Route2"> Route 2 </Link>
            <Link to="/Route3"> Route 3 </Link>
          </p>
          <hr />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
