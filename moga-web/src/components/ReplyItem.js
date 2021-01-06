import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function ReplyItem(props) {

    return (
        <div className="reply" style={props.style}>
            <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
            <div className="bold">{props.writer}</div>
            <div className="reply-contents">{props.contents}</div>
            <div className="reply-time">{props.time}</div>
        </div>
    );
}

export default ReplyItem;