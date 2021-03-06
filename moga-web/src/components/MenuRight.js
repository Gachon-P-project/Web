/**
 * right menu in header
 */

import React from 'react';
import { Avatar, Badge } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/MenuRight.css';

function MenuRight() {
    return(
        <div className="right-box">
            <div className="right-item">
                <span className="avatar-item">
                    <Badge count={1}>
                        <Avatar className="notification" size="large" icon={<BellOutlined />} />
                    </Badge>
                </span>
            </div>
            <div className="right-item"><Avatar className="user" size="large" icon={<UserOutlined />} /></div>
        </div>
    );
}

export default MenuRight;