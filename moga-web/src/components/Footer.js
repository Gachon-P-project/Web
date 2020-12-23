import React from 'react';
import '../css/Footer.css';
import 'antd/dist/antd.css';
import { RightOutlined  } from '@ant-design/icons';

function Footer() {
    return (
        <div className="footer-wrap">  
            <div className="app-link"><span className="bold">MOGA</span> 앱으로 보기 <RightOutlined /></div>
            <div className="footer">
                <div>&copy; 2020 가천인을 위한 커뮤니티, 모두의 가천 MOGA</div>
            </div>
        </div>
    );
}

export default Footer;