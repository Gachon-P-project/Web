/**
 * 학과 공지사항
 */

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import Layout from './Layout';
import PageHeader from './PageHeader';
import { SearchOutlined, SaveOutlined, EyeFilled } from '@ant-design/icons';
import '../css/Notice.css'

function Notice() {

    /*
        fix : 공지사항 조회
    */
    const noticeItems = [
        { num: 1882, link: '/main/notice/', board_no: 1958, title: 'X-Design 경진대회 결과', file: 0, date: '2020-12-19', view: 29 },
        { num: 1881, link: '/main/notice/', board_no: 1957, title: '2021-1학기 교내장학금 신청기간 안내', file: 1, date: '2020-12-16', view: 143 },
        { num: 1880, link: '/main/notice/', board_no: 1956, title: '2020-2nd Semester Announcement of Grades and Correction peri...', file: 1, date: '2020-12-14', view: 130 },
        { num: 1879, link: '/main/notice/', board_no: 1955, title: '2020학년도 창의NTree 미참석자 과제제출', file: 0, date: '2020-12-11', view: 82 },
        { num: 1878, link: '/main/notice/', board_no: 1954, title: '[LINC+] 스마트에너지시스템 융합전공 학생 모집(예비3학년)', file: 1, date: '2020-12-11', view: 32 },
    ];

    // 창 크기에 따라 input width 조절
    const size = useWindowSize();
    const width = size[0];
    let inputWidth;
    width > 736 ? inputWidth = { width: '700px' } : inputWidth = { width: width - 20 };

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="공지사항" />

            {/* 공지사항 검색 */}
            <div className="notice-search">
                <div className="notice-search-icon"><SearchOutlined /></div>
                <input
                    className="notice-search-input" autoFocus type="text" style={inputWidth} placeholder="제목을 검색해 보세요."
                />
            </div>

            {/* 공지사항 목록 */}
            {noticeItems.map((noticeItem) =>
                <NoticeList
                    link={noticeItem.link + noticeItem.board_no}
                    title={noticeItem.title}
                    file={noticeItem.file}
                    date={noticeItem.date}
                    view={noticeItem.view}
                    key={noticeItem.board_no}
                />
            )}
        </Layout>
    );
}

// 공지사항 목록 UI
function NoticeList(props) {

    return (
        <div className="noticeList">
            <Link to={props.link}>
                <div className="noticeList-title">{props.title}</div>
                <div className="noticeList-date">{props.date}</div>
                <div className="noticeList-file" style={ props.file === 0 ? { display: 'none' } : { display: 'block' }}><SaveOutlined /></div>
                <div className="noticeList-view"><EyeFilled /> {props.view}</div>
            </Link>
        </div>
    );
}

export default withRouter(Notice);