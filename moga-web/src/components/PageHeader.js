import React from 'react';
import { useHistory } from 'react-router';
import { ArrowLeftOutlined, MoreOutlined } from '@ant-design/icons';
import '../css/PageHeader.css';

function PageHeader(props) {

    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <>
        <div className="ph">
            <span className="ph-back" onClick={handleGoBack}><ArrowLeftOutlined /></span>
            <span className="ph-title bold">{props.title}</span>
        </div>

        <div className="post-menu-btn">
            <MoreOutlined />
        </div>
        </>
    );
}

export default PageHeader;