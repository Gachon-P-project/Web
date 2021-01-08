/**
 * 게시물 작성
 */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import useWindowSize from './useWindowSize';
import { CloseOutlined } from '@ant-design/icons';
import '../css/PostWrite.css';

function PostWrite(props) {

    const { params } = props.match;

    // 게시물을 추가할 게시판 : params.board
    console.log('게시판: ', params.board);

    const size = useWindowSize();
    const height = size[1];

    const [title, setTitle] = useState('');     // 입력 제목을 state로 정의
    const [con, setCon] = useState('');         // 입력 내용을 state로 정의
    // const [place, setPlace] = useState('block');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);           // 입력한 제목으로 state 값 변경
        console.log('title: ', title);
    }

    const handleConChange = (e) => {
        setCon(e.target.value);
        // e.target.value === '' && setPlace('block');
        console.log('contents: ', con);
    }

    // const handlePlace = () => {
    //     setPlace('none');
    // }

    const conp = '여기를 눌러서 글을 작성할 수 있습니다. \n [커뮤니티 이용규칙에 어긋나는 행위 금지] \n 1. 게시판의 스크린샷, 게시물 내용 유출 \n 2. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시 \n 3. 특정인이나 단체/지역을 비방하는 행위 \n 4. 기타 약관 및 현행법에 어긋나는 행위';

    return (
        <Layout header footer>
            <div>
                <div className="post-write">
                    <div className="pw-close"><CloseOutlined /></div>
                    <div className="pw-header bold">글 쓰기</div>
                    <div className="pw-ok">완료</div>
                    <div className="pw-title"><input type="text" placeholder="제목" onChange={handleTitleChange} /></div>
                    <div className="pw-contents">
                        <textarea style={{ height: height-250 }} onChange={handleConChange} placeholder={conp}></textarea>
                        {/* <div className="pw-placeholder" style={{ display: place }} onClick={handlePlace}>
                            First Line
                            <br /> Second Line
                            <br /> Third Line
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default withRouter(PostWrite);