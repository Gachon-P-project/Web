/**
 * Dropdown menu with sub-menu of web version menu
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MenuWebDropSub from './MenuWebDropSub';

function MenuWebDropdown(props) {
    const dropItems = [
        {link: '/main/board/major', name: '학과 게시판'},
        {link: '/main/board/free', name: '자유 게시판'},
        {link: '/main/board/hot', name: 'HOT 게시판'}
    ];

    const current = window.location.pathname;
    const substr = current.substring(0, 11);

    return(
        <li className={ (current === props.link | substr === '/main/board') ? 'mw-item mw-item-active' : 'mw-item' }>
            <Link to={props.link}>{props.name}</Link>
            <ul className="mw-dropdown">
                <DropdownItem dropItem={dropItems[0]} />
                <MenuWebDropSub link="/main/board/subject" name="수업 게시판" />
                <DropdownItem dropItem={dropItems[1]} />
                <DropdownItem dropItem={dropItems[2]} />
            </ul>
        </li>
    );
}

function DropdownItem({ dropItem }) {
    const current = window.location.pathname;

    return (
        <li className={ (current === dropItem.link) ? 'mw-dropdown-item mw-dropdown-item-active' : 'mw-dropdown-item' }>
            <Link to={dropItem.link}>{dropItem.name}</Link>
        </li>
    );
}

export default MenuWebDropdown;