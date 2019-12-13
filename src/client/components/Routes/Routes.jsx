import React from "react";
import { Route } from "react-router-dom";
import routePaths from "../../constants/routes";
import RouteTransitions from "../RouteTransitions/RouteTransitions";
import Todos from "../Todos/Todos";
import ZeroBot from "../Zero/ZeroBot/ZeroBot";

const Routes = () => (
  <RouteTransitions>
    <Route exact path={routePaths.root.path} component={ZeroBot} />
  </RouteTransitions>
);

export default Routes;
