/* *
    web version menu in header
    
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MenuWeb.css';

function MenuWeb() {
    return(
        <div className="mw">
            <div className="mw-wrap">
                <div className="mw-item mw-dropdown">
                    <Link to="/main">게시판</Link>
                    <div className="mw-dropdown-content">
                        <div className="mw-dropdown-item"><Link to="/main/board/major">학과 게시판</Link></div>
                        <div className="mw-dropdown-item"><Link to="#">수업 게시판</Link></div>
                        <div className="mw-dropdown-item"><Link to="#">자유 게시판</Link></div>
                        <div className="mw-dropdown-item"><Link to="#">HOT 게시물</Link></div>
                    </div>
                </div>
                <div className="mw-item"><Link to="#">공지사항</Link></div>
                <div className="mw-item"><Link to="/main/timetable">시간표</Link></div>
            </div>
        </div>
    );
    
}

export default MenuWeb;
