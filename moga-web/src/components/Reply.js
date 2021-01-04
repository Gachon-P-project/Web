import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../css/Reply.css';

function Reply() {
    // const replyItems = [
    //     {no: 0, writer: '익명1', contents: '감스트ㅡ미스포차', time: '10분 전', like: 0, depth: 0},
    //     {no: 1, writer: '익명1', contents: '감스트ㅡ미스포차', time: '10분 전', like: 0, depth: 0},
    // ];

    return (
        <>
        <div className="reply-wrap">
            <div className="reply">
                <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
                <div className="bold">익명1</div>
                <div className="reply-contents">감스트ㅡ미스포차</div>
                <div className="reply-time">10분 전</div>
            </div>
        </div>

        <div className="re-reply-wrap">
            <div className="re-reply">
                <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
                <div className="bold">익명2</div>
                <div className="reply-contents">감스트..?</div>
                <div className="reply-time">10분 전</div>
            </div>
        </div>
        <div className="re-reply-wrap">
            <div className="re-reply">
                <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
                <div className="bold">익명1</div>
                <div className="reply-contents">유튜브에 있음</div>
                <div className="reply-time">10분 전</div>
            </div>
        </div>

        {/* {replyItems.map((replyItem) =>
            
            <div className="reply-wrap" key={replyItem.no}>
                <div className="reply">
                    <Avatar className="reply-avatar" size="small" icon={<UserOutlined />} />
                    <div className="bold">{replyItem.writer}</div>
                    <div className="reply-contents">{replyItem.contents}</div>
                    <div className="reply-time">{replyItem.time}</div>
                </div>
            </div>
        )} */}
        </>
    );
}

export default Reply;