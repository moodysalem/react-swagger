import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import Root from './Root';
import Schema from './Schema';
import Path from './Path';

const withProps = (Component, moreProps) => props => <Component {...moreProps} {...props}/>;

const RouteNotFound = () => (
  <div>
    <h2>Page Not Found!</h2>
  </div>
);

export default ({ swagger }) => (
  <Router history={hashHistory}>
    <Route component={withProps(Root, { swagger })}>
      <Route path="paths/:path/:method" component={withProps(Path, { swagger })}/>
      <Route path="schema/:name" component={withProps(Schema, { swagger })}/>
      <Route path="*" component={RouteNotFound}/>
    </Route>
  </Router>
);