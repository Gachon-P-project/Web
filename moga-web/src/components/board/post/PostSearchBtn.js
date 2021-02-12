/**
 * 게시물 검색 버튼
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import './PostSearchBtn.css'

function PostSearchBtn(props) {

    const link = '/main/board/postsearch/'+props.board;

    return (
        <div className="post-search-btn">
            <Link to={link}><SearchOutlined /></Link>
        </div>
    );
}

export default PostSearchBtn;