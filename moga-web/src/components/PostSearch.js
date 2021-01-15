/**
 * 게시물 검색
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import useWindowSize from './useWindowSize';
import PostSearchResult from './PostSearchResult';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import '../css/PostSearch.css'

function PostSearch(props) {
    const { params } = props.match;

    // 창 크기에 따라 input width 조절
    const size = useWindowSize();
    const width = size[0];
    let inputWidth;
    width > 736 ? inputWidth = { width: '672px' } : inputWidth = { width: width-48 };

    // 검색 취소
    const history = useHistory();
    const handleCancle = () => {
        history.goBack();
    }

    // 검색 결과 담을 state 초기화
    const [results, setResults] = useState({
        no: 0,
        link: '',
        title: '',
        contents: '',
        time: '',
        writer: '',
        like: 0,
        reply: 0
    });

    const [word, setWord] = useState('');   // 입력 검색어를 state로 정의
    const handleInputChange = (e) => {
        setWord(e.target.value);            // 입력한 검색어로 state 값 변경
        setSearch('init');                  // 입력 시 검색 결과창 초기화
    }

    // 검색 상태에 따른 결과 부분 렌더링
    const [search, setSearch] = useState('init');
    const obj = {
        init : <PostSearchInit board={params.board} />, // 검색 전 초기 상태
        notFound: <PostSearchNotFound />,               // 검색 후 결과 없는 경우
        success: <PostSearchResult result={results} />  // 검색 후 결과 있는 경우
    };

    // 엔터키 누르면 검색
    const onKeyPress = (e) => {

        if (word !== '' && e.key === 'Enter') {
            console.log('검색어 : ', word);

            /*
                fix : 특정 게시물 조회
            */
            const searchItems = [
                {no: 1, link: '/main/board/post/'+params.board+'/', title: '게시물 제목1', contents: '내용1', time: '시간', writer: '작성자', like: 1, reply: 2},
                {no: 2, link: '/main/board/post/'+params.board+'/', title: '게시물 제목2', contents: '내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
                {no: 3, link: '/main/board/post/'+params.board+'/', title: '게시물 제목3', contents: '내용3', time: '시간', writer: '작성자', like: 2, reply: 4},
            ];

            if (searchItems.length !== 0) {
                setResults(searchItems);
                setSearch('success');
            } else {
                setSearch('notFound');
            }
        }
    }    

    return (
        <Layout header footer>
            <div className="post-search-wrap">

                {/* 검색어 입력 */}
                <div className="post-search">
                    <div className="post-search-icon"><SearchOutlined /></div>
                    <input className="post-search-input" autoFocus style={inputWidth} type="text" placeholder="글 제목, 내용" onChange={handleInputChange} onKeyPress={onKeyPress} />
                    <div className="post-search-cancel" onClick={handleCancle}><CloseCircleFilled /></div>
                </div>

                {/* 검색 결과 */}
                <div className="post-search-result">
                    {obj[search]}
                </div>
                
            </div>
        </Layout>
    );
}

// 검색 전 초기 상태
function PostSearchInit() {
    
    // 창 크기에 따라 폼 높이 조절
    const size = useWindowSize();
    const width = size[0];
    const height = size[1];

    return (
        <div style={{ height: width > 736 ? height-160 : height-120 }} className="post-search-init">
            <div className="post-search-init-icon"><SearchOutlined /></div>
            <div className="post-search-init-info">게시판의 글을 검색해보세요</div>
        </div>
    );
}

// 검색 후 결과 없는 경우
function PostSearchNotFound() {

    // 창 크기에 따라 폼 높이 조절
    const size = useWindowSize();
    const width = size[0];
    const height = size[1];

    return (
        <div style={{ height: width > 736 ? height-160 : height-120 }}>
            검색 결과 없음
        </div>
    );
}

export default withRouter(PostSearch);