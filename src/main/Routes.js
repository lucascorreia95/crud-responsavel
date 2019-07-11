import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Search from '../pages/search/Search';
import Create from '../pages/create/Create';

function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/consulta' exact component={ Search } />
        <Route path='/novo' component={ Create } />
        <Redirect from='*' to='/consulta' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
