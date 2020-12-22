import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../image/logo.png';
import 'antd/dist/antd.css';
import '../css/Header.css';

function Header() {
    return(
        <div className="header">
            <div className="logoBox">
                <img src={logo} alt="MOGA" className="header-logo" />
                <div className="txt">가천인을 위한 커뮤니티, 모두의 가천</div>
            </div>
        </div>
    );
}

export default withRouter(Header);