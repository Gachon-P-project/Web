/**
 * 공지사항
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from '../common/useWindowSize';
import useHistoryState from '../useHistoryState';
import Layout from '../common/Layout';
import PageHeader from '../common/PageHeader';
import NoticeList from './NoticeList';
import NoticeSearch from './NoticeSearch';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';
import './Notice.css'

function Notice() {

    // 창 크기에 따라 input width 조절
    const size = useWindowSize();
    const width = size[0];
    let inputWidth;
    width > 736 ? inputWidth = { width: '700px' } : inputWidth = { width: width - 20 };

    // 검색 상태 관리
    const [word, setWord] = useHistoryState('', 'word');                // 입력 검색어를 state에 저장(뒤로가기로 돌아와도 유지)
    const [cancel, setCancel] = useHistoryState('hidden', 'cancel');    // 검색 취소 버튼 state에 저장(뒤로가기로 돌아와도 유지)
    const handleInputChange = (e) => {
        setWord(e.target.value);                                        // 입력한 검색어로 state 값 변경
        setCancel('visible');                                           // 검색어 입력되면 x 버튼 보이기
        setList(() => 'init');                                          // 입력 중엔 전체 공지사항 보이기

        e.target.value === '' && setCancel('hidden');                   // 검색어 다 지워지면 x 버튼 숨기기
    }

    // 검색 상태에 따른 리스트 부분 렌더링
    const [list, setList] = useHistoryState('init', 'list');            // 결과를 state에 저장(뒤로가기로 돌아와도 유지)
    const obj = {
        init: <NoticeInit />,                                           // 검색 전 초기 상태
        search: <NoticeSearch word={word} />                            // 검색 후
    };

    // 엔터키 누르면 검색
    const onKeyPress = (e) => {

        if (word !== '' && e.key === 'Enter') {
            setList(() => 'search');
            document.activeElement.blur();                              // 검색 후 키보드 내리기
        } else if (word === '' && e.key === 'Enter') {
            document.activeElement.blur();                              // 검색어 없이 엔터 누르면 키보드 내리기
        }
    }

    // 검색 취소
    const handleCancle = () => {
        setWord('');
        setCancel('hidden');
        setList(() => 'init');
    }

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="공지사항" />

            {/* 공지사항 검색 */}
            <div className="notice-search">
                <div className="notice-search-icon"><SearchOutlined /></div>
                <input
                    className="notice-search-input" type="text" style={inputWidth} placeholder="제목을 검색해보세요."
                    value={word}
                    onChange={handleInputChange}
                    onKeyPress={onKeyPress}
                />
                <div className="notice-search-cancel" style={{ visibility: cancel }} onClick={handleCancle}><CloseCircleFilled /></div>
            </div>

            {/* 공지사항 목록 */}
            {obj[list]}
        </Layout>
    );
}

// 전체 공지사항 리스트
function NoticeInit() {
    /*
        fix : 공지사항 조회
    */
    const noticeItems = [
        { num: 0, link: '/main/notice/', board_no: 1958, title: 'X-Design 경진대회 결과', file: 0, date: '2020-12-19', view: 29 },
        { num: 0, link: '/main/notice/', board_no: 1957, title: '2021-1학기 교내장학금 신청기간 안내', file: 1, date: '2020-12-16', view: 143 },
        { num: 1882, link: '/main/notice/', board_no: 1958, title: 'X-Design 경진대회 결과', file: 0, date: '2020-12-19', view: 29 },
        { num: 1881, link: '/main/notice/', board_no: 1957, title: '2021-1학기 교내장학금 신청기간 안내', file: 1, date: '2020-12-16', view: 143 },
        { num: 1880, link: '/main/notice/', board_no: 1956, title: '2020-2nd Semester Announcement of Grades and Correction peri...', file: 1, date: '2020-12-14', view: 130 },
        { num: 1879, link: '/main/notice/', board_no: 1955, title: '2020학년도 창의NTree 미참석자 과제제출', file: 0, date: '2020-12-11', view: 82 },
        { num: 1878, link: '/main/notice/', board_no: 1954, title: '[LINC+] 스마트에너지시스템 융합전공 학생 모집(예비3학년)', file: 1, date: '2020-12-11', view: 32 },
    ];

    return (
        noticeItems.map((noticeItem, i) =>
            <NoticeList
                num={noticeItem.num}
                link={noticeItem.link + noticeItem.board_no}
                title={noticeItem.title}
                file={noticeItem.file}
                date={noticeItem.date}
                view={noticeItem.view}
                key={i}
            />
        )
    );

}

export default withRouter(Notice);