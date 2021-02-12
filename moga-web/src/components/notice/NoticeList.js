/**
 * 공지사항 목록 UI
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { SaveOutlined, EyeFilled } from '@ant-design/icons';
import './NoticeList.css'

function NoticeList(props) {

    return (
        <div className={props.num === 0 ? "noticeList noticeList-0" : "noticeList"}>
            <Link to={props.link}>
                <div className="noticeList-title">{props.title}</div>
                <div className="noticeList-date">{props.date}</div>
                <div className="noticeList-file" style={props.file === 0 ? { display: 'none' } : { display: 'block' }}><SaveOutlined /></div>
                <div className="noticeList-view"><EyeFilled /> {props.view}</div>
            </Link>
        </div>
    );
}

export default NoticeList;