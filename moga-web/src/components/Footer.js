/**
 * footer
 * 
 * - 이용안내
 * - 문의하기
 * - 안드로이드 앱 다운로드 링크
 * - copyright
 */

import React from 'react';
import '../css/Footer.css';

function Footer() {
    const today = new Date();

    return (
        <div className="footer-wrap">
            <div className="footer">
                <div>&copy; {today.getFullYear()}. MOGA. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;