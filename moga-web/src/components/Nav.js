import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../css/Nav.css';
import '../css/Content.css';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Board from './Board';
import MajorBoard from './MajorBoard';
import Notice from './Notice';
import Timetable from './Timetable';

const { SubMenu } = Menu;

const obj = {
    board: <Board />,
    board_major: <MajorBoard />,
    notice: <Notice />,
    timetable: <Timetable />,
};

function Nav() {
    const [current, setCurrent] = useState('board');
    const handleMenuClick = (e) => {
    console.log('click ', e);
        setCurrent(e.key);
    };

    return(
        <>
            <Menu mode="horizontal" className="nav bold" selectedKeys={[current]} onClick={handleMenuClick}>
                <SubMenu key="board" title="게시판">
                    <Menu.Item key="board" style={{ display: 'none' }}>전체 게시판</Menu.Item>
                    <Menu.Item key="board_major">학과 게시판</Menu.Item>
                    <Menu.Item key="board_subject">수업 게시판</Menu.Item>
                    <Menu.Item key="board_free">자유 게시판</Menu.Item>
                    <Menu.Item key="board_hot">HOT 게시물</Menu.Item>
                </SubMenu>
                <Menu.Item key="notice">
                    공지
                </Menu.Item>
                <Menu.Item key="timetable">
                    시간표
                </Menu.Item>
                {/* <SubMenu key="mypage" title={<UserOutlined />} className="mypage">
                    <Menu.Item key="">닉네임 변경</Menu.Item>
                    <Menu.Item key="">로그아웃</Menu.Item>
                </SubMenu> */}
            </Menu>
            <div className="content">
                {obj[current]}
            </div>            
        </>
    );
}

export default Nav;