/**
 * 게시물 수정
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import useWindowSize from './useWindowSize';
import { message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../css/PostWrite.css';

function PostModify(props) {

    const { params } = props.match;

    // 값 넘겨받았다 치고
    const postItem = {
        postNo: params.postNo,
        title: '게시물',
        contents: '게시물 테스트중...'
    }

    // 창 크기에 따라 폼 높이 조절
    const size = useWindowSize();
    const width = size[0];
    const height = size[1];


    const [title, setTitle] = useState(postItem.title);             // 입력 제목을 state로 정의
    const [contents, setContents] = useState(postItem.contents);    // 입력 내용을 state로 정의

    const handleTitleChange = (e) => {
        setTitle(e.target.value);                                   // 입력한 제목으로 state 값 변경
    }

    const handleContentsChange = (e) => {
        setContents(e.target.value);                                // 입력한 내용으로 state 값 변경
    }

    const handleOk = () => {
        if (title === '') {
            message.info({
                content: '제목을 입력해 주세요.',
                duration: 1,
                style: {
                    marginTop: height*0.5
                }
            })
        } else if (contents === '') {
            message.info({
                content: '내용을 입력해 주세요.',
                duration: 1,
                style: {
                    marginTop: height*0.5
                }
            })
        } else {
            alert('게시판 : '+ params.board + '\n제목 : ' + title + '\n내용 : ' + contents + '\n수정해라');
            message.success({
                content: '수정되었습니다.',
                duration: 1,
                style: {
                    marginTop: height*0.1
                }
            })

            /*
                fix : 게시물 수정
            */
            history.goBack();   // 수정 후 게시물로 돌아가기

            /* 이렇게 이동하면 게시물 수정 후 헤더 뒤로가기 눌렀을 때 다시 수정화면으로 돌아감
                -> back으로 수정했는데(위에 한 줄) 데이터 reload 되는지 확인 필요
            const board = params.board.split('&');
            if (board[0] === 'major') {
                history.push('/main/board/post/major/'+params.postNo);
            } else if (board[0] === 'subject') {
                history.push('/main/board/post/subject/'+board[1]+'/'+board[2]+params.postNo);
            } else if (board[0] === 'free') {
                history.push('/main/board/post/free'+params.postNo);
            } else if (board[0] === 'hot') {
                history.push('/main/board/post/hot'+params.postNo);
            }
            */
        }
    }

    const history = useHistory();
    const handleClose = () => {
        history.goBack();
    }

    const conp = '여기를 눌러서 글을 작성할 수 있습니다. \n\n[커뮤니티 이용규칙에 어긋나는 행위 금지] \n1. 게시판의 스크린샷, 게시물 내용 유출 \n2. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시 \n3. 특정인이나 단체/지역을 비방하는 행위 \n4. 기타 약관 및 현행법에 어긋나는 행위';

    return (
        <Layout header footer>
            <div>
                <div className="post-write">
                    <div className="pw-close" onClick={handleClose}><CloseOutlined /></div>
                    <div className="pw-header bold">글 수정</div>
                    <div className="pw-ok" onClick={handleOk}>완료</div>
                    <div className="pw-title"><input type="text" placeholder="제목" onChange={handleTitleChange} value={title} /></div>
                    <div className="pw-contents">
                        <textarea style={{ height: width > 736 ? height-260 : height-220 }} onChange={handleContentsChange} placeholder={conp} value={contents}></textarea>
                        
                        {/* 모바일에서 placeholder 줄바꿈 안되는 문제 처리 필요
                        <div className="pw-placeholder">
                            여기를 눌러서 글을 작성할 수 있습니다.
                            <br /><br /> [커뮤니티 이용규칙에 어긋나는 행위 금지]
                            <br /> 1. 게시판의 스크린샷, 게시물 내용 유출
                            <br /> 2. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시
                            <br /> 3. 특정인이나 단체/지역을 비방하는 행위
                            <br /> 4. 기타 약관 및 현행법에 어긋나는 행위
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default withRouter(PostModify);