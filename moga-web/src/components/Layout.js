 /**
  * 따로 레이아웃 구성하여 공통 컴포넌트(header, footer) 처리 -> 쉽게 재사용 가능
  */

import React from 'react';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import '../css/Layout.css';

// 다른 컴포넌트에서 사용 시 header, footer 필요한 것만 값 넘겨주면 됨
function Layout ({ header, footer, children }) {
    const width = useWindowSize();

    let headerType;

    if (width > 736) {
        headerType = <HeaderWeb />;
    } else {
        headerType = <HeaderMobile />;
    }

    return(
        <div className="layout">
            {header && (headerType)}

            <div className="content">
                {children}
            </div>            

            {footer && <Footer />}
        </div>
    );
}

export default Layout;