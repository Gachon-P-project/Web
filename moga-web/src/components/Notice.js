import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import '../css/Main.css';
import '../css/Content.css';

function Notice() {
    const width = useWindowSize();

    let header;
    if (width > 736) {
        header = <HeaderWeb />;
    } else {
        header = <HeaderMobile />;
    }

    return (
        <div className="main">

            {header}

            <div className="content">
                <h1>공지사항</h1>
                <div>테이블? 아코디언?</div>
            </div>

            <Footer />

        </div>
    );
}

export default withRouter(Notice);