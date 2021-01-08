/**
 * 게시물 스크랩
 */

import React, { useState } from 'react';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';

function PostScrap(props) {

    const [scrapState, setScrapState] = useState(false);

    // 클릭할 때마다 아이콘 색상 변경
    const handleScrap = () => {
        setScrapState(!scrapState);
    }

    /*
        fix : 스크랩 추가/삭제
    */

    return (
        <div className="post-scrap" onClick={handleScrap}>
            {scrapState === false
            ?
            <><StarOutlined /> {props.scrap}</>
            :
            <><StarTwoTone twoToneColor="#ffcc1c" /> {props.scrap+1}</>
            }
        </div>
    );
}

export default PostScrap;