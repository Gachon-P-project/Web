/* *
    Sub menu in dropdown of web version menu
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

function MenuWebDropSub(props) {
    const subItems = [
        {link: '/main/board/subject/컴퓨터구조/이상순/201739423', name: '컴퓨터구조'},
        {link: '/main/board/subject/컴퓨터공학개론/김진영/201739412', name: '컴퓨터공학개론'},
        {link: '/main/board/subject/모바일웹/최진우/201739416', name: '모바일웹'}
    ];

    const current = decodeURI(window.location.pathname);
    const substr = current.substring(0, 19);

    return(
        <li className={ current === props.link | substr === props.link ? 'mw-dropdown-item mw-dropdown-item-active' : 'mw-dropdown-item' }>
            <Link to="#">{props.name}<span className="mw-sub-icon"><RightOutlined /></span></Link>
            <ul className="mw-sub">
                {subItems.map((subItem) =>
                    <SubItem
                        class={ (current === subItem.link) ? 'mw-sub-item mw-sub-item-active' : 'mw-sub-item' }
                        name={subItem.name}
                        link={subItem.link}
                        key={subItem.link} />
                )}
                
            </ul>
        </li>
    );
}

function SubItem(props) {
    return (
        <li className={props.class}><Link to={props.link}>{props.name}</Link></li>
    );
}

export default MenuWebDropSub;