/* *
    subject board in main
    
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, List, Row, Col } from 'antd';
import EmptyData from './EmptyData';

/*
    fix : 수업 조회
*/
const subjectData = [
    {link: '/main/board/subject/컴퓨터구조/이상순/201739423', name: '컴퓨터구조'},
    {link: '/main/board/subject/컴퓨터공학개론/김진영/201739412', name: '컴퓨터공학개론'},
    {link: '/main/board/subject/모바일웹/최진우/201739416', name: '모바일웹'},
];

const Empty = () => (
    <EmptyData icon="SmileOutlined" info="수강 중인 수업이 없습니다." />
);

function MainBoardSubject() {
      
    return(
        subjectData.length === 0
        ?
        // 수업 없는 경우
        <ConfigProvider renderEmpty={Empty}>
            <List
                className="board-list"
                header={<div className="board-name bold"><Link to="#">수업 게시판</Link></div>}
                bordered
                grid={{column: 2}}
                dataSource={subjectData}
                renderItem={item => (
                    <List.Item className="board-data">
                        <Link to={item.link}>
                            <div className="board-data-title">{item.name}</div>
                        </Link>
                    </List.Item>
                )}
            />
        </ConfigProvider>
        :
        // 수업 있는 경우
        <List
            className="board-list"
            header={<div className="board-name bold"><Link to="#">수업 게시판</Link></div>}
            bordered
        >
            <Row>
                <Col span={12} style={{ borderRight: '1px solid #f0f0f0' }}>
                    <List
                        dataSource={subjectData}
                        renderItem={(item, i) => (
                            (i%2 === 0) ?
                            <List.Item className="board-data">
                                <Link to={item.link}>
                                    <div className="board-data-title">{item.name}</div>
                                </Link>
                            </List.Item>
                            : <></>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <List
                        dataSource={subjectData}
                        renderItem={(item, i) => (
                            (i%2 === 0) ? <></> :
                            <List.Item className="board-data" style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <Link to={item.link}>
                                    <div className="board-data-title">{item.name}</div>
                                </Link>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            </List>
    );
}

export default MainBoardSubject;