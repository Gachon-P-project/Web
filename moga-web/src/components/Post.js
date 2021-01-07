/**
 * 게시물
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import PageHeader from './PageHeader';
import PostItem from './PostItem';
import Reply from './Reply';
import ReplyWrite from './ReplyWrite';

function Post() {
    /*
        fix : 특정 게시물 조회
    */
    const postItem = {
        no: 1,
        writer: '닉네임',
        title: '새벽을 틈타',
        contents: '노래 추천좀',
        time: '5분 전',
        like: 10,
        reply: 6,
        scrap: 2
    }

    return (
        <Layout header footer>
            <PageHeader title="무슨 게시판" />

            {/* 게시물 */}
            <PostItem
                writer={postItem.writer}
                title={postItem.title}
                contents={postItem.contents}
                time={postItem.time}
                like={postItem.like}
                reply={postItem.reply}
                scrap={postItem.scrap}
                key={postItem.no}
            />

            {/* 댓글, 답글 */}
            <Reply />

            {/* 댓글 입력창 */}
            <ReplyWrite />

        </Layout>
    );
}

export default withRouter(Post);