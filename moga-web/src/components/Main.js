import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import NavWeb from './NavWeb';
import NavMobile from './NavMobile';
import Footer from './Footer';
import '../css/Main.css';

function Main() {
    return (
        <div className="main">
            <Header />
            <NavWeb/>
            <NavMobile />
            <Footer />
        </div>
    );
}

export default withRouter(Main);