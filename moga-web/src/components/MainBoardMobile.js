/**
 * mobile version board in main
 */

import React from 'react';
import { List } from 'antd';
import MainBoardMajor from './MainBoardMajor';
import MainBoardFree from './MainBoardFree';
import MainBoardHot from './MainBoardHot';
import MainBoardSubject from './MainBoardSubject';
import '../css/MainBoard.css';

function MainBoardMobile() {
    return(
        <div className="board-wrap">

            {/* 수업 게시판 */}
            <MainBoardSubject />

            <List
                className="board-list"
                bordered
            >
                {/* 학과 게시판 */}
                <MainBoardMajor />

                {/* 자유 게시판 */}
                <MainBoardFree />
            </List>

            {/* HOT 게시물 */}
            <MainBoardHot />
        </div>
    );
}

export default MainBoardMobile;