import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Deliveries from '../pages/Deliveries';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Deliveries} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/deliveries" exact component={Deliveries} />
    <Route path="/deliveries/:id" component={Details} />
  </Switch>
);

export default Routes;
