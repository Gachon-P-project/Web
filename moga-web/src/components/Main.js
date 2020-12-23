import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Main.css';

function Main() {
    return (
        <div className="main">
            <Header />
            <Nav />
            <Footer />
        </div>
    );
}

export default withRouter(Main);