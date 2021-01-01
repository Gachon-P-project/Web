import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import '../css/Breadcrumb.css';

function Breadcrumb(props) {
    const nameItems = props.name.split(', ');
    const linkItems = props.link.split(', ');

    const nthItems = [];
    for(let i = 0; i < nameItems.length-1; i++){
        const data = {};
        data.name = nameItems[i];
        data.link = linkItems[i];
        nthItems.push(data) ;
    }

    const lastItems = [];
    for(let i = nameItems.length-1; i < nameItems.length; i++){
        const data = {};
        data.name = nameItems[i];
        data.link = linkItems[i];
        lastItems.push(data) ;
    }

    return(
        <div className="breadcrumb">
            <span>
                <span className="breadcrumb-link"><Link to="/main"><HomeOutlined /></Link></span>
                <span className="breadcrumb-separator">/</span>
            </span>
            <span>
                {nthItems.map((nthItem, i) =>
                    <BreadcrumbNth link={nthItem.link} name={nthItem.name} key={i} />
                )}
            </span>
            <span>
                {lastItems.map((lastItem, i) =>
                    <BreadcrumbLast link={lastItem.link} name={lastItem.name} key={i} />
                )}
            </span>
        </div>
    );
}

function BreadcrumbNth(props) {
    return(
        <>
        <span className="breadcrumb-link"><Link to={props.link}>{props.name}</Link></span>
        <span className="breadcrumb-separator">/</span>
        </>
    );
}

function BreadcrumbLast(props) {
    return(
        <>
        <span className="breadcrumb-link"><Link to={props.link}>{props.name}</Link></span>
        <span className="breadcrumb-separator">/</span>
        </>
    );
}

export default Breadcrumb;