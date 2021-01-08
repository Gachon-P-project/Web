import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import BoardMajor from './components/BoardMajor';
import BoardSubject from './components/BoardSubject';
import BoardFree from './components/BoardFree';
import BoardHot from './components/BoardHot';
import Post from './components/Post';
import PostWrite from './components/PostWrite';
import Notice from './components/Notice';
import Timetable from './components/Timetable';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/main/board/major" component={BoardMajor} />
                {/* <Route exact path="/main/board/subject" component={BoardSubject} /> */}
                <Route exact path='/main/board/subject/:subject/:professor/:userNo' component={BoardSubject} />
                <Route exact path="/main/board/free" component={BoardFree} />
                <Route exact path="/main/board/hot" component={BoardHot} />
                <Route exact path="/main/board/post" component={Post} />
                <Route exact path="/main/board/post/write/:board" component={PostWrite} />
                <Route exact path="/main/notice" component={Notice} />
                <Route exact path="/main/timetable" component={Timetable} />
            </Switch>
        </Router>
    );
}

export default Routes;