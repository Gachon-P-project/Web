/**
 * 게시물 검색 결과
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import '../css/PostList.css';

function PostSearchResult(props) {

    return (
        <>
        {props.result.map((result) =>
            <div className="postList" key={result.no}>
                <Link to={result.link+result.no}>
                    <div className="postList-title">{result.title}</div>
                    <div className="postList-contents">{result.contents}</div>
                    
                    <div className="postList-time">{result.time}&nbsp;|</div>
                    <div className="postList-writer">&nbsp;{result.writer}</div>
                
                    <div className="postList-status">
                        <div className="postList-like"><LikeOutlined /> {result.like}</div>
                        <div className="postList-reply"><MessageOutlined /> {result.reply}</div>
                    </div>
                </Link>
            </div>
        )}
        <div></div>
        </>
    );
}

export default PostSearchResult;