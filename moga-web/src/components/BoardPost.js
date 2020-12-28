import React from 'react';
import { Link } from 'react-router-dom';
import {  LikeOutlined, MessageOutlined } from '@ant-design/icons';
import '../css/BoardPost.css';

function BoardPost(props) {

    return (
        <div className="post">
            <Link to={props.link}>
                <div className="title">{props.title}</div>
                <div className="contents">{props.contents}</div>
                
                <time dateTime={props.time}>{props.time}&nbsp;|</time>
                <div className="writer">&nbsp;{props.writer}</div>
            
                <div className="status">
                    <div className="like"><LikeOutlined /> {props.like}</div>
                    <div className="reply"><MessageOutlined /> {props.reply}</div>
                </div>
            </Link>
        </div>
    );
}

export default BoardPost;