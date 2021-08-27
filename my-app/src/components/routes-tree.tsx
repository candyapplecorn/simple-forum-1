import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "./home";
import React from "react";
import Board from "./board";

const RoutesTree = () => {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:boardTitle`}>
          <Board />
        </Route>
        <Route path={`${match.path}/:boardTitle`}>
          <Board />
        </Route>
        <Route path={match.path}>
          <Home />
        </Route>
        ;
      </Switch>
    </div>
  );
};

export default RoutesTree;
