import React from 'react';
import '../css/Footer.css';
import 'antd/dist/antd.css';
import { RightOutlined  } from '@ant-design/icons';

function Footer() {
    const today = new Date();

    return (
        <div className="footer-wrap">  
            <div className="app-link"><span className="bold">MOGA</span> 앱으로 보기 <RightOutlined /></div>
            <div className="footer">
                <div>&copy; {today.getFullYear()}. MOGA. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;