import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import Board from './Board';
import '../css/Main.css';

function Main() {
    return (
        <div className="main">

            <HeaderWeb />
            <HeaderMobile />

            <Board />

            <Footer />

        </div>
    );
}

export default withRouter(Main);