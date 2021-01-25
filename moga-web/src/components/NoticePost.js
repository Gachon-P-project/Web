/**
 * 공지사항 내용
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import PageHeader from './PageHeader';
import NoticePostUrl from './NoticePostUrl'
import hwp from '../image/notice_icon/icon_hwp.gif';
import '../css/NoticePost.css'

function NoticePost(props) {
    const { params } = props.match;

    alert('board_no : ' + params.board_no)

    /*
        fix : 공지사항 게시물 선택
    */

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="공지사항" />

            {/* 학과 홈페이지 공지사항으로 이동 */}
            <NoticePostUrl board_no={params.board_no} />

            {/* 공지사항 내용 */}
            <div className="notice">
                <div className="notice-title bold">2021-1학기 장기 실습학기제(현장실습) 시행 안내</div>
                <div className="notice-date">작성일 &nbsp;&nbsp;2021-01-19 14:45:39</div>
                <div className="notice-view">조회수 &nbsp;&nbsp;206</div>
                <div className="notice-file">
                    <a href=".hwp" download="#가천대_2021-1학기현장실습참여기관신청(모집)안내실습기관용.hwp">
                        <img src={hwp} alt="file" className="notice-file-icon" />
                        #가천대_2021-1학기현장실습참여기관신청(모집)안내실습기관용.hwp
                    </a>
                    <a href=".hwp" download="#2021-1학기현장실습(실습학기제)신청양식,견본.hwp">
                        <img src={hwp} alt="file" className="notice-file-icon" />
                        #2021-1학기현장실습(실습학기제)신청양식,견본.hwp
                    </a>
                </div>
                <div className="notice-contents">
                    1. 실 습 명 : 2021-1학기 장기 실습학기제(현장실습)<br />
                    2. 신청기간 : 2021. 1. 18.(월) ~ 2. 23.(화)까지<br />
                    3. 실습기간 : 2021. 3. 2.(화) ~ 6. 21.(월) 내 12주 또는 15주<br />
                    4. 신청자격 및 학점인정<br /><br />
                    ※ 학점 및 장학금 지급은 실습종료 후 보고서 작성 및 교수평가 승인 후 지급됨<br />
                    5. 교원지원금 : 학생 현장실습 이수 시 기업 당 10만원~30만원(최대 60만원이내)<br />
                    6. 실습기관 섭외 및 서류 제출<br />
                    ◯ 관련서류 : 협약서, 참여신청서, 운영계획서 작성 “붙임참조”<br />
                    ◯ 제출마감 : 2021. 2. 24.(수)_수시제출 가능<br />
                    ◯ 제출방법 : 각 학과별 사무실에서 수합 제출<br />
                    ◯ 제 출 처 : 취업지원팀(비전타워 B구역 학생서비스센터)<br />
                    담당: 최기영(내선: 4789, E-mail: choicui@gachon.ac.kr)<br />
                    ※ 현장실습 참여자는 수강신청 요청서 작성하여 개별 제출
                </div>
            </div>
        </Layout>
    );
}

export default withRouter(NoticePost);