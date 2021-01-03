/**
 * web version board in main
 */

import React from 'react';
import { Row, Col } from 'antd';
import MainBoardMajor from './MainBoardMajor';
import MainBoardFree from './MainBoardFree';
import MainBoardHot from './MainBoardHot';
import MainBoardSubject from './MainBoardSubject';
import '../css/MainBoard.css';

function MainBoardWeb() {
    return (
        <Row gutter={8} className="board-wrap">
            <Col span={16}>
                <Row gutter={[8, 8]}>
                    <Col span={12}>

                        {/* 학과 게시판 */}
                        <MainBoardMajor />

                    </Col>
                    <Col span={12}>

                        {/* 자유 게시판 */}
                        <MainBoardFree />

                    </Col>
                </Row>

                {/* 수업 게시판 */}
                <MainBoardSubject />

            </Col>

            <Col span={8}>

                {/* HOT 게시물 */}
                <MainBoardHot />

            </Col>
        </Row>
    );
}

export default MainBoardWeb;