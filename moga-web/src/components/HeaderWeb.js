/* *
    web version header
    
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import 'antd/dist/antd.css';
import logo from '../image/logo.png';
import MenuWeb from './MenuWeb';
import MenuRight from './MenuRight';

function HeaderWeb() {

    return(
        <>
        <div className="header">

            {/* logo */}
            <div className="logo-wrap">
                <Link to="/main"><img src={logo} alt="MOGA" className="header-logo" /></Link>
            </div>
            
            {/* menu */}
            <MenuWeb />

            {/* notification, user menu */}
            <MenuRight />
            
        </div>
        </>
    );
}

export default HeaderWeb;