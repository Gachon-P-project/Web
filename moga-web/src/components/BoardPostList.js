/**
 * 게시글 목록 UI
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import '../css/BoardPostList.css';

function BoardPostList(props) {

    return (
        <div className="postList">
            <Link to={props.link}>
                <div className="postList-title">{props.title}</div>
                <div className="postList-contents">{props.contents}</div>
                
                <div className="postList-time">{props.time}&nbsp;|</div>
                <div className="postList-writer">&nbsp;{props.writer}</div>
            
                <div className="postList-status">
                    <div className="postList-like"><LikeOutlined /> {props.like}</div>
                    <div className="postList-reply"><MessageOutlined /> {props.reply}</div>
                </div>
            </Link>
        </div>
    );
}

export default BoardPostList;