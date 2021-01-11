/**
 * 게시물
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import PageHeader from './PageHeader';
import PostMenu from './PostMenu';
import PostItem from './PostItem';
import Reply from './Reply';
import ReplyWrite from './ReplyWrite';

function Post(props) {
    const { params } = props.match;
    // parameter : params.board, params.postNo

    const board = params.board.split('&');

    let headerTitle = ''
    if (params.board === 'major') {
        headerTitle = '학과 게시판';
    } else if (params.board === 'free') {
        headerTitle = '자유 게시판';
    } else if (params.board === 'hot') {
        headerTitle = 'HOT 게시판';
    } else if (board[0] === 'subject') {
        headerTitle = board[1];
    }

    /*
        fix : 게시물 상세 조회
    */
    const postItem = {
        postNo: params.postNo,
        userNo: '2000',
        writer: '닉네임',
        title: headerTitle + ' 게시물',
        contents: '게시물 테스트중...\npost_no : ' + params.postNo,
        time: '5분 전',
        like: 10,
        reply: 6,
        scrap: 2
    }

    return (
        <Layout header footer>

            {/* 헤더 */}
            <PageHeader title={headerTitle} />

            {/* 게시물 메뉴 */}
            <PostMenu
                board={params.board}
                postNo={postItem.postNo}
                userNo={postItem.userNo}
            />

            {/* 게시물 */}
            <PostItem
                writer={postItem.writer}
                title={postItem.title}
                contents={postItem.contents}
                time={postItem.time}
                like={postItem.like}
                reply={postItem.reply}
                scrap={postItem.scrap}
                key={postItem.postNo}
            />

            {/* 댓글, 답글 */}
            <Reply writer={postItem.writer} />

            {/* 댓글 입력창 */}
            <ReplyWrite />

        </Layout>
    );
}

export default withRouter(Post);