import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Breadcrumb from './Breadcrumb';
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
                {/* breadcrumb */}
                <Breadcrumb link="/timetable" name="시간표" />
            </div>

            <Footer />

        </div>
    );
}

export default withRouter(Timetable);