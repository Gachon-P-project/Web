/**
 * 게시물 공감
 */

import React, { useState } from 'react';
import { LikeOutlined, LikeTwoTone } from '@ant-design/icons';

function PostLike(props) {

    const [likeState, setLikeState] = useState(false);

    // 클릭할 때마다 아이콘 색상 변경
    const handleLike = () => {
        setLikeState(!likeState);
    }

    /*
        fix : 공감 추가/삭제
    */

    return (
        <div className="post-like" onClick={handleLike}>
            {likeState === false
            ?
            <><LikeOutlined /> {props.like}</>
            :
            <><LikeTwoTone twoToneColor="#c62917" /> {props.like+1}</>
            }
        </div>
    );
}

export default PostLike;