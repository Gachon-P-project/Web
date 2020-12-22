import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Timetable from './components/Timetable';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/timetable" component={Timetable} />
            </Switch>
        </Router>
    );
  }

export default Routes;