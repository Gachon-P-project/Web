/**
 * 현재 페이지 위치 표시
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import '../css/Breadcrumb.css';

function Breadcrumb(props) {
    const nameItems = props.name.split(', ');
    const linkItems = props.link.split(', ');

    // 중간 레벨 아이템
    const nthItems = [];
    for(let i = 0; i < nameItems.length-1; i++){
        const data = {};
        data.name = nameItems[i];
        data.link = linkItems[i];
        nthItems.push(data) ;
    }

    // 마지막 레벨 아이템
    const lastItems = [];
    for(let i = nameItems.length-1; i < nameItems.length; i++){
        const data = {};
        data.name = nameItems[i];
        data.link = linkItems[i];
        lastItems.push(data) ;
    }

    return(
        <div className="breadcrumb">
            {/* home */}
            <span>
                <span className="breadcrumb-link"><Link to="/main"><HomeOutlined /></Link></span>
                <span className="breadcrumb-separator">/</span>
            </span>

            {/* 중간 레벨 */}
            <span>
                {nthItems.map((nthItem) =>
                    <BreadcrumbItem link={nthItem.link} name={nthItem.name} key={nthItem.link} />
                )}
            </span>

            {/* 마지막 레벨 */}
            <span>
                {lastItems.map((lastItem) =>
                    <BreadcrumbItem link={lastItem.link} name={lastItem.name} key={lastItem.link} />
                )}
            </span>
        </div>
    );
}

// 아이템 UI
function BreadcrumbItem(props) {
    return(
        <>
        <span className="breadcrumb-link"><Link to={props.link}>{props.name}</Link></span>
        <span className="breadcrumb-separator">/</span>
        </>
    );
}

export default Breadcrumb;