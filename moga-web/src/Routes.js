import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />
            </Switch>
        </Router>
    );
  }

export default Routes;