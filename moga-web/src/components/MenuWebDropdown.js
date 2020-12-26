/* *
    Dropdown menu with sub-menu of web version menu
    
*/

import React from 'react';
import { Link } from 'react-router-dom';

function MenuWebDropdown(props) {

    // 하위 메뉴 리스트
    const dropdownItems = [
        {name: '학과 게시판', link: '/main/board/major'},
        {name: '수업 게시판', link: '/main/board/subject'},
        {name: '자유 게시판', link: '/main/board/free'},
        {name: 'HOT 게시물', link: '/main/board/hot'}
    ];

    const current = window.location.pathname;

    return(
        
        <div className={ current === props.link | current.substring(0, 11) === '/main/board' ? 'mw-item mw-item-active mw-dropdown' : 'mw-item mw-dropdown' }>
            <Link to={props.link}>{props.name}</Link>   {/* 상위 메뉴 링크, 이름 */}
            <div className="mw-dropdown-content">
                {dropdownItems.map((dropdownItem, i) =>
                    <DropdownItem
                        class={ (current === dropdownItem.link) ? 'mw-dropdown-item mw-dropdown-item-active' : 'mw-dropdown-item' }
                        name={dropdownItem.name}
                        link={dropdownItem.link}
                        key={i} />
                )}
            </div>
        </div>
    );
}

// 하위 메뉴
function DropdownItem(props) {
    return (
        <div className={props.class}><Link to={props.link}>{props.name}</Link></div>
    );
}

export default MenuWebDropdown;

