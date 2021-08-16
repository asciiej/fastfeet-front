import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Deliveries from '../pages/Deliveries';
import Details from '../pages/Details';
import Confirm from '../pages/ConfirmDeliverie';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/deliveries" exact component={Deliveries} />
    <Route path="/deliveries/:id" exact component={Details} />
    <Route path="/deliveries/:id/confirm" component={Confirm} />
  </Switch>
);

export default Routes;
