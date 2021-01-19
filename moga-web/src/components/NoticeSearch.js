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
        { num: 1879, link: '/main/notice/', board_no: 1955, title: '2020학년도 창의NTree 미참석자 과제제출', file: 0, date: '2020-12-11', view: 82 },
        { num: 1878, link: '/main/notice/', board_no: 1954, title: '[LINC+] 스마트에너지시스템 융합전공 학생 모집(예비3학년)', file: 1, date: '2020-12-11', view: 32 },
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