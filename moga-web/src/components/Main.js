import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import Layout from './Layout';
import MainBoardWeb from './MainBoardWeb';
import MainBoardMobile from './MainBoardMobile';

function Main() {
    const width = useWindowSize();
    let mainBoard;

    if (width > 736) {
        mainBoard = <MainBoardWeb />;
    } else {
        mainBoard = <MainBoardMobile />;
    }

    return(
        <Layout header footer>
            {mainBoard}
        </Layout>
    );
}

export default withRouter(Main);