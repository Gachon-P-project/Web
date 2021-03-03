import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Login from './components/login/Login';
import Main from './components/board/main/Main';
import BoardMajor from './components/board/category/BoardMajor';
import BoardSubject from './components/board/category/BoardSubject';
import BoardFree from './components/board/category/BoardFree';
import BoardHot from './components/board/category/BoardHot';
import Post from './components/board/post/Post';
import PostSearch from './components/board/post/PostSearch';
import PostWrite from './components/board/post/PostWrite';
import PostModify from './components/board/post/PostModify';
import PostDelete from './components/board/post/PostDelete';
import Notice from './components/notice/Notice';
import NoticePost from './components/notice/NoticePost';
import Timetable from './components/timetable/Timetable';


function Routes() {
    return(
        <Router>
            <ScrollToTop />
            
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />

                {/* 게시판 */}
                <Route exact path="/main/board/major" component={BoardMajor} />
                {/* <Route exact path="/main/board/subject" component={BoardSubject} /> */}
                <Route exact path='/main/board/subject/:subject/:professor' component={BoardSubject} />
                <Route exact path="/main/board/free" component={BoardFree} />
                <Route exact path="/main/board/hot" component={BoardHot} />

                {/* 게시물 */}
                {/* <Route exact path="/main/board/post" component={Post} /> */}
                <Route exact path="/main/board/post/:board/:postNo" component={Post} />
                <Route exact path="/main/board/postsearch/:board" component={PostSearch} />
                {/* <Route exact path="/main/board/post/write" component={PostWrite} /> */}
                <Route exact path="/main/board/postwrite/:board" component={PostWrite} />
                <Route exact path="/main/board/postmodify/:board/:postNo" component={PostModify} />
                <Route exact path="/main/board/postdelete/:board/:postNo" component={PostDelete} />

                {/* 공지사항 */}
                <Route exact path="/main/notice" component={Notice} />
                <Route exact path="/main/notice/:board_no" component={NoticePost} />

                {/* 시간표 */}
                <Route exact path="/main/timetable" component={Timetable} />
            </Switch>
        </Router>
    );
}

export default Routes;