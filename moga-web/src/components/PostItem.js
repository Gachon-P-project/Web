/**
 * 게시물 UI
 */

import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import PostLike from './PostLike';
import PostScrap from './PostScrap';
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
                <pre className="post-contents">{props.contents}</pre>
                <div className="post-status">
                    <PostLike like={props.like} />
                    <div className="post-reply"><MessageOutlined /> {props.reply}</div>
                    <PostScrap scrap={props.scrap} />
                </div>
            </div>
        </div>
    );
    
}

export default PostItem;