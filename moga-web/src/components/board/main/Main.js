import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from '../../common/useWindowSize';
import Layout from '../../common/Layout';
import MainBoardWeb from './MainBoardWeb';
import MainBoardMobile from './MainBoardMobile';

function Main() {
    const size = useWindowSize();
    const width = size[0];

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