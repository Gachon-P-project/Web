/**
 * HOT 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../common/Layout';
import PageHeader from '../../common/PageHeader';
import PostList from '../post/PostList';

function BoardHOT() {

    /*
        fix : HOT 게시물 전체 조회
    */
    const postItems = [
        {no: 1, link: '/main/board/post/hot/', title: 'hot 게시물 제목1', contents: '게시물 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 2, link: '/main/board/post/hot/', title: 'hot 게시물 제목2', contents: '게시물 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 3, link: '/main/board/post/hot/', title: 'hot 게시물 제목3', contents: '게시물 내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];


    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="HOT 게시판" />

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
        </Layout>
    );
}

export default withRouter(BoardHOT);