/**
 * major board in main
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, List } from 'antd';
import { MehOutlined } from '@ant-design/icons';
import useWindowSize from './useWindowSize';
import EmptyData from './EmptyData';

/*
    fix : 학과 게시물 조회 (최근 4개)
*/
const majorData = [
    {link: '#', title: '학과 게시물 제목1', time: '방금'},
    {link: '#', title: '학과 게시물 제목2', time: '10분 전'},
    {link: '#', title: '학과 게시물 제목3', time: '21/01/01 18:00'},
    {link: '#', title: '학과 게시물 제목4', time: '20/12/30 12:30'},
];

function MainBoardMajor() {
    const width = useWindowSize();

    let mainBoardMajor;
    
    if (width > 736) {
        mainBoardMajor = <MainBoardMajorWeb />;
    } else {
        mainBoardMajor = <MainBoardMajorMobile />;
    }

    return(
        <>
        {mainBoardMajor}
        </>
    );
}


/* web version */

const Empty = () => (
    <EmptyData info="아직 학과 게시물이 없습니다." desc="게시물을 작성해 주세요!" />
);

function MainBoardMajorWeb() {
    return(
        <ConfigProvider renderEmpty={Empty}>
            <List
                className="board-list"
                header={<div className="board-name bold"><Link to="/main/board/major">학과 게시판</Link></div>}
                bordered
                dataSource={majorData}
                renderItem={item => (
                    <List.Item className="board-data">
                        <Link to={item.link}>
                            <div className="board-data-title">{item.title}</div>
                            <div className="board-data-time">{item.time}</div>
                        </Link>
                    </List.Item>
                )}
            />
        </ConfigProvider>
    );
}


/* mobile version */

function MainBoardMajorMobile() {
    return(
        <List.Item className="board-data">
            <Link to="/main/board/major">
                <div className="board-mobile">
                    <span className="board-name bold">학과 게시판</span>

                    {majorData.length === 0
                    ?
                    // 게시글 없는 경우
                    <span className="board-mobile-data board-mobile-data-empty">
                        <MehOutlined />아직 학과 게시물이 없습니다.
                    </span>
                    :
                    // 게시글 있는 경우
                    <span className="board-mobile-data">{majorData[0].title}</span>}
                </div>
            </Link>
        </List.Item>
    );
}

export default MainBoardMajor;