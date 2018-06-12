import React from "react";

import { Route, Switch } from "react-router-dom";
import Route1 from "./components/Route1";
import Route3 from "./components/Route3";
import Route2 from "./components/Route2";
import Fish from "./components/Fish";

export default (
  <Switch>
    <Route path="/" exact component={Route1} />
    <Route path="/route2" exact component={Route2} />
    <Route path="/route3" exact component={Route3} />
    <Route path="/fish/:id" component={Fish} />
  </Switch>
);
