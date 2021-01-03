/**
 * 학과 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Breadcrumb from './Breadcrumb';
import BoardPostList from './BoardPostList';
import '../css/Breadcrumb.css';

function BoardMajor() {

    /*
        fix : 학과 게시물 전체 조회
    */
    const postItems = [
        {no: 0, link: '', title: '학과 게시물 제목1', contents: '학과 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 1, link: '', title: '학과 게시물 제목2', contents: '학과 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 2, link: '', title: '학과 게시물 제목3', contents: '학과 내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];

    return (
        <Layout header footer>
            {/* breadcrumb */}
            <Breadcrumb link="/main, /main/board/major" name="게시판, 학과 게시판" />

            {/* post */}
            {postItems.map((postItem) =>
                <BoardPostList
                    link={postItem.link}
                    title={postItem.title}
                    contents={postItem.contents}
                    time={postItem.time}
                    writer={postItem.writer}
                    like={postItem.like}
                    reply={postItem.reply}
                    key={postItem.no}
                />
            )}
        </Layout>
        
    );
}

export default withRouter(BoardMajor);