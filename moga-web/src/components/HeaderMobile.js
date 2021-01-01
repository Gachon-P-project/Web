/* *
    mobile version header
    
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import 'antd/dist/antd.css';
import logo from '../image/logo.png';
import MenuMobile from './MenuMobile';
import MenuRight from './MenuRight';

function HeaderMobile() {

    return(
        <>
        <div className="header">

            {/* menu */}
            <MenuMobile />

            {/* logo */}
            <div className="logo-wrap">
                <Link to="/main"><img src={logo} alt="MOGA" className="header-logo" /></Link>
            </div>
            
            {/* notification, user menu */}
            <MenuRight />

        </div>
        </>
    );
}

export default HeaderMobile;