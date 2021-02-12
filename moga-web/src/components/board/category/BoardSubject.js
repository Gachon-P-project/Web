/**
 * 수업 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../common/Layout';
import PageHeader from '../../common/PageHeader';
import PostSearchBtn from '../post/PostSearchBtn';
import PostWriteBtn from '../post/PostWriteBtn';
import PostList from '../post/PostList';

function BoardSubject(props) {
    const { params } = props.match;
    // parameter : params.subject, params.professor, params.userNo

    /*
        fix : 수업별 게시글 전체 조회
    */
    const postItems = [
        {no: 1, link: '/main/board/post/subject&'+params.subject+'&'+params.professor+'/', title: '제목1', contents: '내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {no: 2, link: '/main/board/post/subject&'+params.subject+'&'+params.professor+'/', title: '제목2', contents: '내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {no: 3, link: '/main/board/post/subject&'+params.subject+'&'+params.professor+'/', title: '제목3', contents: '내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            
            {/*
                fix : title에 수업명. parameter 받는 방법 변경 시 수정 필요
            */}
            <PageHeader title={params.subject} />

            {/* search button */}
            <PostSearchBtn board={'subject&'+params.subject+'&'+params.professor} />

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
            <PostWriteBtn board={'subject&'+params.subject+'&'+params.professor} />
        </Layout>
    );
}

export default withRouter(BoardSubject);