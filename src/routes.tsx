import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Join from 'views/auth/Join';
import Login from 'views/auth/Login';
import Welcome from 'views/Welcome';
import CreateEvent from 'views/CreateEvent';
import EventPage from 'views/EventPage';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/events/new">
        <CreateEvent />
      </Route>
      <Route path="/events/:id">
        <EventPage />
      </Route>
      <Route path="/events">
        <Home />
      </Route>
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
