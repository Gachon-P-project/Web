/**
 * 댓글 UI
 */

import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../css/ReplyItem.css';

function ReplyItem(props) {

    const mark = { display: props.mark };

    return (
        <div className="reply" style={props.style}>
            <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
            <div className="reply-writer bold">{props.writer}</div>
            <div className="reply-mark" style={mark}><div>글쓴이</div></div>
            <div className="reply-contents">{props.contents}</div>
            <div className="reply-time">{props.time}</div>
        </div>
    );
}

export default ReplyItem;