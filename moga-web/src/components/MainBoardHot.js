/**
 * hot board in main
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, List } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import EmptyData from './EmptyData';

/*
    fix : hot 게시물 조회 (5개)
*/
const hotData = [
    {link: '#', title: 'hot 게시물 제목1', time: '방금', like: 20, reply: 4},
    {link: '#', title: 'hot 게시물 제목2', time: '10분 전', like: 30, reply: 10},
    {link: '#', title: 'hot 게시물 제목3', time: '21/01/01 18:00', like: 15, reply: 21},
    {link: '#', title: 'hot 게시물 제목4', time: '20/12/30 12:30', like: 18, reply: 7},
    {link: '#', title: 'hot 게시물 제목5', time: '20/12/28 21:00', like: 23, reply: 30},
];


const Empty = () => (
    <EmptyData info="아직 많은 공감을 받은 게시물이 없습니다." desc="공감을 눌러주세요!" />
);


function MainBoardHot() {
    return(
        <ConfigProvider renderEmpty={Empty}>
            <List
                className="board-list"
                header={<div className="board-name bold"><Link to="/main/board/hot">HOT 게시물</Link></div>}
                bordered
                dataSource={hotData}
                locale={{}}
                renderItem={item => (
                    <List.Item className="board-data">
                        <Link to={item.link}>
                                <div className="board-data-title">{item.title}</div>
                                <div className="board-data-time">{item.time}</div>
                                <div className="board-data-status">
                                    <span className="board-data-like"><LikeOutlined /> {item.like}</span>
                                    <span className="board-data-reply"><MessageOutlined /> {item.reply}</span>
                                </div>
                            </Link>
                    </List.Item>
                )}
            />
        </ConfigProvider>
    );
}

export default MainBoardHot;