/* *
    Default menu without dropdown of web version menu
    
*/

import React from 'react';
import { Link } from 'react-router-dom';

function MenuWebDefault(props) {
    const current = window.location.pathname;

    return(
        <li className={ (current === props.link) ? 'mw-item mw-item-active' : 'mw-item' }><Link to={props.link}>{props.name}</Link></li>
    );
}

export default MenuWebDefault;