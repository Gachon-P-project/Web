/**
 * 댓글 UI
 */

import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined, MoreOutlined } from '@ant-design/icons';
import ReplyMenu from './ReplyMenu';
import '../css/ReplyItem.css';

function ReplyItem(props) {

    // 댓글 작성자가 게시물 글쓴이인 경우 mark
    const mark = props.post === props.writer ? { display: 'block' } : { display: 'none' };

    // modal action
    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(true);
    };

    const closeModal = () => {
        setModalState(false);
    };

    return (
        <div className="reply" style={props.style}>
            <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
            <div className="reply-writer bold">{props.writer}</div>
            <div className="reply-mark" style={mark}><div>글쓴이</div></div>
            <div className="reply-menu-btn" onClick={openModal}>
                <MoreOutlined />
                <ReplyMenu state={modalState} close={closeModal} />
            </div>
            <pre className="reply-contents">{props.contents}</pre>
            <div className="reply-time">{props.time}</div>
        </div>
    );
}

export default ReplyItem;