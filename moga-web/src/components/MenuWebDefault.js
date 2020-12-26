/* *
    default menu without sub-menu of web version menu
    
*/

import React from 'react';
import { Link } from 'react-router-dom';

function MenuWebDefault() {

    const menuItems = [
        {name: '공지사항', link: '/main/notice'},
        {name: '시간표', link: '/main/timetable'}
    ];

    const current = window.location.pathname;

    return(
        menuItems.map((menuItem, i) =>
            <MenuItem
                class={ (current === menuItem.link) ? 'mw-item mw-item-active' : 'mw-item' }
                name={menuItem.name}
                link={menuItem.link}
                key={i} />
        )
    );
}

function MenuItem(props) {
    return (
        <div className={props.class}><Link to={props.link}>{props.name}</Link></div>
    );
}

export default MenuWebDefault;

