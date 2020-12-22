import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function Main() {
    return (
        <>
            <Header></Header>
        </>
    );
}

export default withRouter(Main);