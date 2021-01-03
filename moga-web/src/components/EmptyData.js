/**
 * board in main is empty
 */

import React from 'react';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';

function EmptyData(props) {
    return(
        <div>
            <div style={{ fontSize: '1.5em' }}>
                {/* 웃는 표정, 무표정 중에 고를 수 있음 */}
                {props.icon === "SmileOutlined" ? <SmileOutlined /> : <MehOutlined />}
            </div>
            <div>{props.info}</div>
            <div>{props.desc}</div>
        </div>
    );
}

export default EmptyData;