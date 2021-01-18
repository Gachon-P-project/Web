/**
 * 학과 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import PageHeader from './PageHeader';
import PostSearchBtn from './PostSearchBtn';
import PostWriteBtn from './PostWriteBtn';
import PostList from './PostList';

function BoardMajor() {
    /*
        fix : 학과 게시물 전체 조회
    */
    const postItems = [
        {no: 1, link: '/main/board/post/major/', title: '학과 게시물 제목1', contents: '학과 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 2, link: '/main/board/post/major/', title: '학과 게시물 제목2', contents: '학과 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 3, link: '/main/board/post/major/', title: '학과 게시물 제목3', contents: '학과 내용3', time: '시간', writer: '작성자', like: 2, reply: 4},
        {no: 4, link: '/main/board/post/major/', title: '학과 게시물 제목4', contents: '학과 내용4', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 5, link: '/main/board/post/major/', title: '학과 게시물 제목5', contents: '학과 내용5', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 6, link: '/main/board/post/major/', title: '학과 게시물 제목6', contents: '학과 내용6', time: '시간', writer: '작성자', like: 2, reply: 4},
    ];

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="학과 게시판" />

            {/* search button */}
            <PostSearchBtn board="major" />

            {/* post list */}
            {postItems.length === 0
            ?
                <PostList empty="y" />
            :
                postItems.map((postItem) =>
                    <PostList
                        empty="n"
                        link={postItem.link+postItem.no}
                        title={postItem.title}
                        contents={postItem.contents}
                        time={postItem.time}
                        writer={postItem.writer}
                        like={postItem.like}
                        reply={postItem.reply}
                        key={postItem.no}
                    />
                )
            }

            {/* write button */}
            <PostWriteBtn board="major" />
        </Layout>
    );
}

export default withRouter(BoardMajor);