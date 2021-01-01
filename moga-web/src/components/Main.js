import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import Board from './Board';
import '../css/Main.css';

function Main() {
    const width = useWindowSize();
    // console.log('Window size: ', {width});

    let header;
    if (width > 736) {
        header = <HeaderWeb />;
    } else {
        header = <HeaderMobile />;
    }

    return(
        <div className="main">
            {header}
            <Board />
            <Footer />
        </div>
    );
}

export default withRouter(Main);