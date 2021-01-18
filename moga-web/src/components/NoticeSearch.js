/**
 * 공지사항 검색
 */

import React from 'react';
import NotFound from './NotFound';
import NoticeList from './NoticeList';

function NoticeSearch(props) {

    console.log('검색어 : ', props.word);

    /*
        fix : 공지사항 검색
    */

    const searchItems = [
        { num: 1882, link: '/main/notice/', board_no: 1958, title: 'X-Design 경진대회 결과', file: 0, date: '2020-12-19', view: 29 },
        { num: 1881, link: '/main/notice/', board_no: 1957, title: '2021-1학기 교내장학금 신청기간 안내', file: 1, date: '2020-12-16', view: 143 },
    ];

    return (
        <>
            {searchItems.length === 0
                ?
                <NotFound />
                :
                searchItems.map((result) =>
                    <NoticeList
                        link={result.link + result.board_no}
                        title={result.title}
                        file={result.file}
                        date={result.date}
                        view={result.view}
                        key={result.board_no}
                    />
                )
            }
        </>
    );
}

export default NoticeSearch;