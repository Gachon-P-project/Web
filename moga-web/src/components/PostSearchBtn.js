/**
 * 게시물 검색 버튼
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import '../css/PostSearchBtn.css'

function PostSearchBtn() {
    return (
        <div className="post-search-btn">
            <Link to=""><SearchOutlined /></Link>
        </div>
    );
}

export default PostSearchBtn;