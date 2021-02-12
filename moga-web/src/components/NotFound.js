/**
 * 검색 결과 없는 경우
 */

import React from 'react';
import useWindowSize from './common/useWindowSize';
import notFoundIcon from '../image/thinking.svg';
import './NotFound.css'

function NotFound() {

    // 창 크기에 따라 폼 높이 조절
    const size = useWindowSize();
    const width = size[0];
    const height = size[1];

    return (
        <div style={{ height: width > 736 ? height-170 : height-130 }} className="not-found">
            <img src={notFoundIcon} alt="Not Found" className="not-found-icon" />
            <div className="not-found-info">
                게시물을 찾을 수 없습니다.
                <br />
                다시 검색해 주세요.
            </div>
        </div>
    );
}

export default NotFound;