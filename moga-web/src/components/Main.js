import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import MainBoardWeb from './MainBoardWeb';
import MainBoardMobile from './MainBoardMobile';
import '../css/Main.css';

function Main() {
    const width = useWindowSize();
    // console.log('Window size: ', {width});

    let header;
    let mainBoard;

    if (width > 736) {
        header = <HeaderWeb />;
        mainBoard = <MainBoardWeb />;
    } else {
        header = <HeaderMobile />;
        mainBoard = <MainBoardMobile />;
    }

    return(
        <div className="main">
            {header}
            {mainBoard}
            <Footer />
        </div>
    );
}

export default withRouter(Main);