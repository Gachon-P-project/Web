/* *
    web version menu in header
    
*/

import React from 'react';
import '../css/MenuWeb.css';
import MenuWebDefault from './MenuWebDefault';
import MenuWebDropdown from './MenuWebDropdown';

function MenuWeb() {
    return(
        <div className="mw">
            <div className="mw-wrap">
                <MenuWebDropdown link="/main" name="게시판" /> {/* 상위 메뉴 링크, 이름 */}
                <MenuWebDefault />
            </div>
        </div>
    );
    
}

export default MenuWeb;

