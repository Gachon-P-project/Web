/**
 * 글 쓰기 버튼
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import '../css/PostWriteBtn.css';

function PostWriteBtn() {

    return (
        <Link to="" className="post-write-btn bold">
            <EditOutlined />&nbsp;&nbsp;글 쓰기
        </Link>
    );
}

export default PostWriteBtn;