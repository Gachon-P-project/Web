import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
// import Footer from './Footer';
import '../css/Main.css';
import '../css/Content.css';

function Notice() {
    return (
        <div className="main">

            <HeaderWeb />
            <HeaderMobile />

            <div className="content">
                <h1>공지사항</h1>
                <div>테이블? 아코디언?</div>
            </div>

        </div>
    );
}

export default withRouter(Notice);