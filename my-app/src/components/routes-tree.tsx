import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "./home";
import React from "react";
import Board from "./board";

const RoutesTree = () => {
  let match = useRouteMatch();

  debugger;

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:boardTitle`}>
          This is the path {match.path} {match.url}{" "}
          {JSON.stringify(match.params)}
          <Board />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
        ;
      </Switch>
    </div>
  );
};

export default RoutesTree;
