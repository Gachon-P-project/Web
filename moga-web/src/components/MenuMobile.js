/* *
    mobile version menu in header
    
*/

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/MenuMobile.css';
import 'antd/dist/antd.css';
import { Drawer, Menu } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function MenuMobile(props) {

    // menu action
    const [openState, setOpenState] = useState('block');    // 메뉴 열기 버튼 상태
    const [closeState, setCloseState] = useState('none');   // 메뉴 닫기 버튼 상태
    const [drawerState, setDrawerState] = useState(false);
 
    const openDrawer = () => {
        setOpenState('none');       // 메뉴 열기 버튼 비활성화
        setCloseState('block');     // 메뉴 닫기 버튼 활성화
        setDrawerState(true);
    }
    const closeDrawer = () => {
        setOpenState('block');      // 메뉴 열기 버튼 활성화
        setCloseState('none');      // 메뉴 닫기 버튼 비활성화
        setDrawerState(false);
    }

    // page change action
    const current = window.location.pathname;
    const handleMenuClick = (e) => {
        props.history.push(e.key);
    };

    return(
        <>
        {/* menu button */}
        <div className="menu-btn" onClick={openDrawer} style={{ display: openState }}><MenuOutlined /></div>
        <div className="menu-btn menu-btn-close" onClick={closeDrawer} style={{ display: closeState }}><CloseOutlined /></div>

        {/* menu wrap */}
        <Drawer
            placement="top"
            closable={false} //x 버튼 활성화
            onClose={closeDrawer}
            visible={drawerState}
            height={"100%"}
            >
                
            {/* menu */}
            <Menu
                className="menu"
                onClick={handleMenuClick}
                defaultSelectedKeys={[current]} //최초 선택되는 메뉴
                defaultOpenKeys={['board']}     //열어둘 서브메뉴
                mode="inline"
                >
                <SubMenu key="board" title="게시판" className="bold">
                    <Menu.Item key="/main">전체 게시판</Menu.Item>
                    <Menu.Item key="/main/board/major">학과 게시판</Menu.Item>
                    <Menu.Item key="/main/board/subject">수업 게시판</Menu.Item>
                    <Menu.Item key="/main/board/free">자유 게시판</Menu.Item>
                    <Menu.Item key="/main/board/hot">HOT 게시물</Menu.Item>
                </SubMenu>
                <Menu.Item key="/main/notice" className="bold">공지사항</Menu.Item>
                <Menu.Item key="/main/timetable" className="bold">시간표</Menu.Item>

                <Menu.Item key="/main/guide">이용안내</Menu.Item>
                <Menu.Item key="/main/consult">문의하기</Menu.Item>
            </Menu>
        </Drawer>
        </>
    );
}

export default withRouter(MenuMobile);