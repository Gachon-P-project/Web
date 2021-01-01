import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import '../css/Main.css';
import '../css/Content.css';

function Timetable() {
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
                <h1>시간표</h1>
                <div>라이브러리 찾기</div>
            </div>

            <Footer />

        </div>
    );
}

export default withRouter(Timetable);