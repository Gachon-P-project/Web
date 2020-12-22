import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

function Main() {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
        </>
    );
}

export default withRouter(Main);