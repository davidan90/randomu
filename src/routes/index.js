import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Contact } from 'containers';
import { NotFound } from 'components';

const AppRoutes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/randomu' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default AppRoutes;
