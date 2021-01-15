/**
 * 수업 게시판
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Breadcrumb from './Breadcrumb';
import PostSearchBtn from './PostSearchBtn';
import PostWriteBtn from './PostWriteBtn';
import PostList from './PostList';

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
            {/* breadcrumb */}
            <Breadcrumb link="#, #" name={"수업 게시판, " + params.subject} />

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