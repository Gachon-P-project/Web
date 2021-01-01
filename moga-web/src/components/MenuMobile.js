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

    // 수업 게시판 하위 메뉴
    const subjectItems = [
        {link: '/main/board/subject/컴퓨터구조/이상순/201739423', name: '컴퓨터구조'},
        {link: '/main/board/subject/컴퓨터공학개론/김진영/201739412', name: '컴퓨터공학개론'},
        {link: '/main/board/subject/모바일웹/최진우/201739416', name: '모바일웹'}
    ];

    // page change action
    const current = decodeURI(window.location.pathname);
    const handleMenuClick = (e) => {
        props.history.push(e.key);
        window.location.reload();
    };

    return(
        <>
        {/* menu button */}
        <div className="mm-btn" onClick={openDrawer} style={{ display: openState }}><MenuOutlined /></div>
        <div className="mm-btn mm-btn-close" onClick={closeDrawer} style={{ display: closeState }}><CloseOutlined /></div>

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
                className="mm"
                onClick={handleMenuClick}
                defaultSelectedKeys={[current]} //최초 선택되는 메뉴
                defaultOpenKeys={['board']}     //열어둘 서브메뉴
                mode="inline"
                >
                
                {/* dropdown */}
                <SubMenu key="board" title="게시판" className="bold">
                    <Menu.Item key="/main">전체 게시판</Menu.Item>
                    <Menu.Item key="/main/board/major">학과 게시판</Menu.Item>
                    <SubMenu key="subject" title="수업 게시판">
                        {subjectItems.map((subjectItem) =>
                            <Menu.Item key={subjectItem.link}>{subjectItem.name}</Menu.Item>
                        )}
                    </SubMenu>
                    <Menu.Item key="/main/board/free">자유 게시판</Menu.Item>
                    <Menu.Item key="/main/board/hot">HOT 게시판</Menu.Item>
                </SubMenu>

                {/* default menu - font weight bold */}
                <Menu.Item key="/main/notice" className="bold">공지사항</Menu.Item>
                <Menu.Item key="/main/timetable" className="bold">시간표</Menu.Item>

                {/* default menu */}
                <Menu.Item key="/main/guide">이용안내</Menu.Item>
                <Menu.Item key="/main/consult">문의하기</Menu.Item>
            </Menu>
        </Drawer>
        </>
    );
}

export default withRouter(MenuMobile);