/**
 * Web version menu in header
 */

import React from 'react';
import MenuWebDefault from './MenuWebDefault';
import MenuWebDropdown from './MenuWebDropdown';
import './MenuWeb.css';

function MenuWeb() {
    return(
        <ul className="mw">
            <MenuWebDropdown link="/main" name="게시판" />
            <MenuWebDefault link="/main/notice" name="공지사항" />
            <MenuWebDefault link="/main/timetable" name="시간표" />
        </ul>
    );
}

export default MenuWeb;