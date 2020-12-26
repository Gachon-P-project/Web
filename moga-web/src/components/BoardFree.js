import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
// import Footer from './Footer';
import '../css/Main.css';
import '../css/Content.css';

function BoardFree() {
    return (
        <div className="main">

            <HeaderWeb />
            <HeaderMobile />

            <div className="content">
                <h1>자유 게시판</h1>
            </div>

        </div>
    );
}

export default withRouter(BoardFree);