// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Join from './views/Join';
import Login from './views/Login';
import Welcome from './views/Welcome';

const Routes = () => {
  return (
    <Switch>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
