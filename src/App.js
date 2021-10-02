import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsBoard from "./components/NewsBoard";
import { BoxLoading } from "react-loadingg";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="container">
          <Nav />
          <React.Suspense fallback={<BoxLoading color="rgb(187, 46, 31)" />}>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <NewsBoard {...props} type={"top"} />}
              />
              <Route
                exact
                path="/new"
                render={(props) => <NewsBoard {...props} type={"new"} />}
              />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
