import React from 'react';
import { Link } from 'react-router-dom';
import {  LikeOutlined, MessageOutlined } from '@ant-design/icons';
import '../css/BoardPost.css';

function BoardPost(props) {

    return (
        <div className="post">
            <Link to={props.link}>
                <div className="post-title">{props.title}</div>
                <div className="post0contents">{props.contents}</div>
                
                <div className="post-time">{props.time}&nbsp;|</div>
                <div className="post-writer">&nbsp;{props.writer}</div>
            
                <div className="post-status">
                    <div className="post-like"><LikeOutlined /> {props.like}</div>
                    <div className="post-reply"><MessageOutlined /> {props.reply}</div>
                </div>
            </Link>
        </div>
    );
}

export default BoardPost;