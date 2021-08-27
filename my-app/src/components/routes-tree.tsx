import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Home from "./home";
import React from "react";
import Board from "./board";
import ThreadView from "./threadView";
import Thread from "../model/thread";

const RoutesTree = () => {
  let match = useRouteMatch();
  const params = useParams();
  const thread: Thread = {} as unknown as Thread;

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:boardTitle/:threadTitle`}>
          <ThreadView thread={thread} />
        </Route>
        <Route path={`${match.path}/:boardTitle`}>
          <Board />
        </Route>
        <Route path={match.path}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutesTree;
