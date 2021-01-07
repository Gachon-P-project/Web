/**
 * 게시물 UI
 */

import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import '../css/PostItem.css';

function PostItem(props) {
    return (
        <div className="post-wrap">
            <div className="post">
                <Avatar className="post-avatar" size="large" icon={<UserOutlined />} />
                <div className="post-info">
                    <div className="bold">{props.writer}</div>
                    <div className="post-time">{props.time}</div>
                </div>
                <div className="post-title bold">{props.title}</div>
                <div className="post-contents">{props.contents}</div>
                <div className="post-status">
                    <div className="post-like"><LikeOutlined /> {props.like}</div>
                    <div className="post-reply"><MessageOutlined /> {props.reply}</div>
                    <div className="post-scrap"><StarOutlined /> {props.scrap}</div>
                </div>
            </div>
        </div>
    );
    
}

export default PostItem;