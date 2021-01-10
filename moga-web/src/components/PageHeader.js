/**
 * 뒤로가기 버튼 있는 페이지 헤더
 */

import React from 'react';
import { useHistory } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '../css/PageHeader.css';

function PageHeader(props) {

    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <div className="ph">
            <span className="ph-back" onClick={handleGoBack}><ArrowLeftOutlined /></span>
            <span className="ph-title bold">{props.title}</span>
        </div>
    );
}

export default PageHeader;