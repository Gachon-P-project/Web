import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/Nav.css';
import { Menu } from 'antd';

function Nav() {
    return(
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">
                Navigation One
            </Menu.Item>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default withRouter(Nav);