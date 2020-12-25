import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import BoardMajor from './components/BoardMajor';
import Timetable from './components/Timetable';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/main/board/major" component={BoardMajor} />
                <Route exact path="/main/timetable" component={Timetable} />
            </Switch>
        </Router>
    );
}

export default Routes;