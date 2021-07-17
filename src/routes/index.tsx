import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Deliveries from '../pages/Deliveries';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Deliveries} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/deliveries" component={Deliveries} />
  </Switch>
);

export default Routes;
