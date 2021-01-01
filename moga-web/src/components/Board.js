import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, List } from 'antd';
import {  LikeOutlined, MessageOutlined } from '@ant-design/icons';
import '../css/Content.css';
import '../css/Board.css';

const boardLists = [
    {link: '/main/board/major', name: '학과 게시판'},
    {link: '/main/board/free', name: '자유 게시판'},
    {link: '#', name: '수업 게시판'},
    {link: '/main/board/hot', name: 'HOT 게시물'}
];

const majorData = [
    {link: '#', title: '학과 게시물 제목1', time: '방금'},
    {link: '#', title: '학과 게시물 제목2', time: '10분 전'},
    {link: '#', title: '학과 게시물 제목3', time: '21/01/01 18:00'},
    {link: '#', title: '학과 게시물 제목4', time: '20/12/30 12:30'},
];

const freeData = [
    {link: '#', title: '자유 게시물 제목1', time: '방금'},
    {link: '#', title: '자유 게시물 제목2', time: '10분 전'},
    {link: '#', title: '자유 게시물 제목3', time: '21/01/01 18:00'},
    {link: '#', title: '자유 게시물 제목4', time: '20/12/30 12:30'},
];

const hotData = [
    {link: '#', title: 'hot 게시물 제목1', time: '방금', like: 20, reply: 4},
    {link: '#', title: 'hot 게시물 제목2', time: '10분 전', like: 30, reply: 10},
    {link: '#', title: 'hot 게시물 제목3', time: '21/01/01 18:00', like: 15, reply: 21},
    {link: '#', title: 'hot 게시물 제목4', time: '20/12/30 12:30', like: 18, reply: 7},
    {link: '#', title: 'hot 게시물 제목5', time: '20/12/28 21:00', like: 23, reply: 30},
];

const subjectData = [
    {link: '/main/board/subject/컴퓨터구조/이상순/201739423', name: '컴퓨터구조'},
    {link: '/main/board/subject/컴퓨터공학개론/김진영/201739412', name: '컴퓨터공학개론'},
    {link: '/main/board/subject/모바일웹/최진우/201739416', name: '모바일웹'},
];

const subjectEven = [];
const subjectOdd = [];

for (let i = 0; i < Math.ceil((subjectData.length)/2) ; i++) {
    subjectEven.push(subjectData[i*2]);
}
for (let i = 0; i < parseInt((subjectData.length)/2) ; i++) {
    subjectOdd.push(subjectData[i*2+1]);
}

function BoardList({ boardList }) {
    return (
        <div className="board-title bold"><Link to={boardList.link}>{boardList.name}</Link></div>
    );
}

function Board() {
    
    return (
        <div className="content board-wrap">
            <Row>
                <Col span={16}>
                    <Row>
                        <Col span={12}>
                            {/* 학과 게시판 */}
                            <List
                                className="board-list"
                                header={<BoardList boardList={boardLists[0]} />}
                                bordered
                                dataSource={majorData}
                                renderItem={item => (
                                    <List.Item className="board-data">
                                        <Link to={item.link}>{item.title}
                                            <br />
                                            <div className="board-data-time">{item.time}</div>
                                        </Link>
                                    </List.Item>
                            )}
                            />
                        </Col>
                        <Col span={12}>
                            {/* 자유 게시판 */}
                            <List
                                className="board-list"
                                header={<BoardList boardList={boardLists[1]} />}
                                bordered
                                dataSource={freeData}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to={item.link}>{item.title}
                                            <br />
                                            <div className="board-data-time">{item.time}</div>
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    {/* 수업 게시판 */}
                    <List
                        className="board-list"
                        header={<BoardList boardList={boardLists[2]} />}
                        bordered   
                    >
                        <Row>
                            <Col span={12} style={{ borderRight: '1px solid #f0f0f0' }}>
                                <List
                                    dataSource={subjectEven}
                                    renderItem={item => (
                                        <List.Item>
                                            <Link to={item.link}>{item.name}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col span={12}>
                                <List
                                    dataSource={subjectOdd}
                                    renderItem={item => (
                                        <List.Item style={{ borderBottom: '1px solid #f0f0f0' }}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </List>
                </Col>
                <Col span={8}>
                    {/* HOT 게시물 */}
                    <List
                        className="board-list"
                        header={<BoardList boardList={boardLists[3]} />}
                        bordered
                        dataSource={hotData}
                        renderItem={item => (
                            <List.Item>
                                <Link to={item.link}>{item.title}
                                    <br />
                                    <div className="board-data-time">{item.time}</div>
                                    <div className="board-data-status">
                                        <span className="board-data-like"><LikeOutlined /> {item.like}</span>
                                        <span className="board-data-reply"><MessageOutlined /> {item.reply}</span>
                                    </div>
                                </Link>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Board;