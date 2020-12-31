import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, List } from 'antd';
import '../css/Content.css';
import '../css/Board.css';

const boardLists = [
    {link: '/main/board/major', name: '학과 게시판'},
    {link: '/main/board/free', name: '자유 게시판'},
    {link: '/main/board/hot', name: 'HOT 게시물'}
];

const majorData = [
    '학과 게시판 게시물',
    '학과 게시판 게시물',
    '학과 게시판 게시물',
    '학과 게시판 게시물',
];

const freeData = [
    '자유 게시판 게시물',
    '자유 게시판 게시물',
    '자유 게시판 게시물',
    '자유 게시판 게시물',
];

const hotData = [
    '핫게',
    '핫게',
    '핫게',
    '핫게',
    '핫게',
];

const subjectData = [
    // {link: '/main/board/subject', title: '수업명1'},
    // {link: '/main/board/subject', title: '수업명2'},
    // {link: '/main/board/subject', title: '수업명3'},
    '수업명1',
    '수업명2',
    '수업명3',
    '수업명4',
    '수업명5',
    '수업명6',
    '수업명7',
];

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
                            <List
                                className="board-list"
                                header={<BoardList boardList={boardLists[0]} />}
                                bordered
                                dataSource={majorData}
                                renderItem={item => (
                                    <List.Item className="board-data">
                                        {item}
                                    </List.Item>
                            )}
                            />
                        </Col>
                        <Col span={12}>
                            <List
                                className="board-list"
                                header={<BoardList boardList={boardLists[1]} />}
                                bordered
                                dataSource={freeData}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <List
                        className="board-list"
                        header={<div className="board-title bold"><Link to="">수업 게시판</Link></div>}
                        bordered
                        dataSource={subjectData}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}    
                    />
                </Col>
                <Col span={8}>
                    <List
                        className="board-list"
                        header={<BoardList boardList={boardLists[2]} />}
                        bordered
                        dataSource={hotData}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Board;