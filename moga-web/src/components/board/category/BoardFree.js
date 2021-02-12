/**
 * 자유 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../common/Layout';
import PageHeader from '../../common/PageHeader';
import PostSearchBtn from '../post/PostSearchBtn';
import PostWriteBtn from '../post/PostWriteBtn';
import PostList from '../post/PostList';

function BoardFree() {
    /*
        fix : 자유 게시물 전체 조회
    */
    const postItems = [
        {no: 1, link: '/main/board/post/free/', title: '자유 게시물 제목1', contents: '자유 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 2, link: '/main/board/post/free/', title: '자유 게시물 제목2', contents: '자유 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 3, link: '/main/board/post/free/', title: '자유 게시물 제목3', contents: '자유 내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="자유 게시판" />

            {/* search button */}
            <PostSearchBtn board="free" />

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
            <PostWriteBtn board="free" />
        </Layout>
    );
}

export default withRouter(BoardFree);