/**
 * 학과 홈페이지 공지사항으로 연결
 */

import React from 'react';
import { RocketOutlined } from '@ant-design/icons';

function NoticePostUrl(props) {

    const handleNoticeUrl = () => {

        alert('board_no : ' + props.board_no)

        /*
            fix : 공지사항 게시물 선택_URL
        */
       
        window.open("https://www.gachon.ac.kr/major/bbs.jsp?mode=view&boardType_seq=159&board_no=1967&approve=&secret=&answer=&branch=&searchopt=&searchword=&pageSize=10&pageNum=0")
    }

    return (
        <div className="notice-url" onClick={handleNoticeUrl}>
            <RocketOutlined />
        </div>
    );   
}

export default NoticePostUrl