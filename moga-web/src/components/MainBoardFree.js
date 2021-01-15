/**
 * free board in main
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, List } from 'antd';
import { MehOutlined } from '@ant-design/icons';
import useWindowSize from './useWindowSize';
import EmptyData from './EmptyData';

/*
    fix : 자유 게시물 조회 (최근 4개)
*/
const freeData = [
    {no: 1, link: '/main/board/post/free/', title: '자유 게시물 제목1', time: '방금'},
    {no: 2, link: '/main/board/post/free/', title: '자유 게시물 제목2', time: '10분 전'},
    {no: 3, link: '/main/board/post/free/', title: '자유 게시물 제목3', time: '21/01/01 18:00'},
    {no: 4, link: '/main/board/post/free/', title: '자유 게시물 제목4', time: '20/12/30 12:30'},
];

function MainBoardFree() {
    const size = useWindowSize();
    const width = size[0];

    let mainBoardFree;
    
    if (width > 736) {
        mainBoardFree = <MainBoardFreeWeb />;
    } else {
        mainBoardFree = <MainBoardFreeMobile />;
    }

    return(
        <>
        {mainBoardFree}
        </>
    );
}


/* web version */

const Empty = () => (
    <EmptyData info="작성된 자유 게시물이 없습니다." desc="게시물을 작성해 주세요!" />
);

function MainBoardFreeWeb() {
    return(
        <ConfigProvider renderEmpty={Empty}>
            <List
                className="board-list"
                header={<div className="board-name bold"><Link to="/main/board/free">자유 게시판</Link></div>}
                bordered
                dataSource={freeData}
                renderItem={item => (
                    <List.Item className="board-data">
                        <Link to={item.link+item.no}>
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

function MainBoardFreeMobile() {
    return(
        <List.Item className="board-data">
            <Link to="/main/board/free">
                <div className="board-mobile">
                    <span className="board-name bold">자유 게시판</span>

                    {freeData.length === 0
                    ?
                    // 게시글 없는 경우
                    <span className="board-mobile-data board-mobile-data-empty">
                        <MehOutlined />작성된 자유 게시물이 없습니다.
                    </span>
                    :
                    // 게시글 있는 경우
                    <span className="board-mobile-data">{freeData[0].title}</span>}
                </div>
            </Link>
        </List.Item>
    );
}

export default MainBoardFree;