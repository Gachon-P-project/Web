/**
 * 게시물 작성
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import useWindowSize from './useWindowSize';
import { message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../css/PostWrite.css';

function PostWrite(props) {

    const { params } = props.match;

    // 창 크기에 따라 폼 높이 조절
    const size = useWindowSize();
    const width = size[0];
    const height = size[1];


    const [title, setTitle] = useState('');     // 입력 제목을 state로 정의
    const [con, setCon] = useState('');         // 입력 내용을 state로 정의

    const handleTitleChange = (e) => {
        setTitle(e.target.value);               // 입력한 제목으로 state 값 변경
    }

    const handleConChange = (e) => {
        setCon(e.target.value);                 // 입력한 내용으로 state 값 변경
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
        } else if (con === '') {
            message.info({
                content: '내용을 입력해 주세요.',
                duration: 1,
                style: {
                    marginTop: height*0.5
                }
            })
        } else {
            alert('게시판 '+params.board+'\n제목 '+title+'\n내용 '+con);
            /*
                fix : 게시물 추가
            */
        }
    }

    const history = useHistory();
    const handleClose = () => {
        history.goBack();
    }

    const conp = '여기를 눌러서 글을 작성할 수 있습니다. \n\n [커뮤니티 이용규칙에 어긋나는 행위 금지] \n 1. 게시판의 스크린샷, 게시물 내용 유출 \n 2. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시 \n 3. 특정인이나 단체/지역을 비방하는 행위 \n 4. 기타 약관 및 현행법에 어긋나는 행위';

    return (
        <Layout header footer>
            <div>
                <div className="post-write">
                    <div className="pw-close" onClick={handleClose}><CloseOutlined /></div>
                    <div className="pw-header bold">글 쓰기</div>
                    <div className="pw-ok" onClick={handleOk}>완료</div>
                    <div className="pw-title"><input type="text" placeholder="제목" onChange={handleTitleChange} /></div>
                    <div className="pw-contents">
                        <textarea style={{ height: width > 736 ? height-260 : height-220 }} onChange={handleConChange} placeholder={conp}></textarea>
                        
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

export default withRouter(PostWrite);