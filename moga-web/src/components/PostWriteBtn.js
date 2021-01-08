/**
 * 글 쓰기 버튼
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import '../css/PostWriteBtn.css';

function PostWriteBtn(props) {
    
    const link = '/main/board/post/write/'+props.board;

    return (
        <Link to={link} className="post-write-btn bold">
            <EditOutlined />&nbsp;&nbsp;글 쓰기
        </Link>
    );
}

export default PostWriteBtn;