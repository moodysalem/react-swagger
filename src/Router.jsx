import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import Root from './components/Root';

const withProps = (Component, moreProps) => props => <Component {...props} {...moreProps} />;

export default ({ swagger }) => (
  <Router history={hashHistory}>
    <Route component={withProps(Root, { swagger })}>
      <Route path="tags">
        <Route path=":tag" component={<div>Tag!</div>}></Route>
      </Route>
      <Route path="*" component={<div>Not found!</div>}/>
    </Route>
  </Router>
);