import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsBoard from "./components/NewsBoard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Nav />
        <React.Suspense>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
