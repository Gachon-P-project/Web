/**
 * 게시물 검색
 */

import React from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import useWindowSize from './useWindowSize';
import useHistoryState from './useHistoryState';
import PostSearchResult from './PostSearchResult';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import '../css/PostSearch.css';

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

    // 검색어 상태 관리
    const [word, setWord] = useHistoryState('', 'word');    // 입력 검색어를 state에 저장(뒤로가기로 돌아와도 유지)
    const handleInputChange = (e) => {
        setWord(e.target.value);                            // 입력한 검색어로 state 값 변경
        setResult('init');                                  // 입력 중엔 검색 결과창 초기화
    }

    // 검색 상태에 따른 결과 부분 렌더링
    const [result, setResult] = useHistoryState('init', 'search');      // 결과를 state에 저장(뒤로가기로 돌아와도 유지)
    const obj = {
        init : <PostSearchInit />,                                      // 검색 전 초기 상태
        search: <PostSearchResult board={params.board} word={word} />   // 검색 후
    };

    // 엔터키 누르면 검색
    const onKeyPress = (e) => {

        if (word !== '' && e.key === 'Enter') {
            setResult(() => 'search');
            document.activeElement.blur();                              // 검색 후 키보드 내리기
        }
    }    

    return (
        <Layout header footer>
            <div className="post-search-wrap">

                <div className="post-search">
                    <div className="post-search-icon"><SearchOutlined /></div>

                    {/* 검색어 입력 */}
                    <input
                        className="post-search-input" autoFocus style={inputWidth} type="text" placeholder="글 제목, 내용"
                        value={word}
                        onChange={handleInputChange}
                        onKeyPress={onKeyPress}
                    />

                    {/* 검색 취소 */}
                    <div className="post-search-cancel" onClick={handleCancle}><CloseCircleFilled /></div>
                </div>

                {/* 검색 결과 */}
                <div className="post-search-result">
                    {obj[result]}
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
        <div style={{ height: width > 736 ? height-170 : height-130 }} className="post-search-init">
            <div className="post-search-init-icon"><SearchOutlined /></div>
            <div className="post-search-init-info">게시판의 글을 검색해보세요</div>
        </div>
    );
}

export default withRouter(PostSearch);