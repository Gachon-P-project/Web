import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/Header.css';
import logo from '../image/logo.png';

function Header() {
    return(
        <div className="header">
            <div className="logoBox">
                <img src={logo} alt="MOGA" className="header-logo" />
            </div>
        </div>
    );
}

export default withRouter(Header);