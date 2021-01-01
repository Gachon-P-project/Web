import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import Board from './Board';
import BoardList2 from './BoardList2';
import '../css/Main.css';

function Main() {
    const width = useWindowSize();
    // console.log('Window size: ', {width});

    let header;
    let boardList;
    if (width > 736) {
        header = <HeaderWeb />;
        boardList = <Board />;
    } else {
        header = <HeaderMobile />;
        boardList = <BoardList2 />;
    }

    return(
        <div className="main">
            {header}
            {boardList}
            <Footer />
        </div>
    );
}

export default withRouter(Main);