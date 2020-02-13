import React, { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./containers/login";
import Loading from "./containers/loading";
import "./styles/app.css";

const Dashboard = lazy(() => import("./containers/dashboard"));

const App = () => {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--color-primary", "#02b875");
  }, []);

  return (
    <Router>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
