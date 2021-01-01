import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Breadcrumb from './Breadcrumb';
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
                {/* breadcrumb */}
                <Breadcrumb link="/notice" name="공지사항" />
            </div>

            <Footer />

        </div>
    );
}

export default withRouter(Notice);