/**
 * 댓글 입력 창
 */

import React, { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
import useWindowSize from '../../common/useWindowSize';
import './ReplyWrite.css';

function ReplyWrite() {

    // 창 크기에 따라 input width 조절
    const size = useWindowSize();
    const width = size[0];
    
    let inputWidth;
    if (width > 736) {
        inputWidth = { width: '700px' };
    } else {
        inputWidth = { width: width-20 };
    }

    const [reply, setReply] = useState(''); // 입력 댓글을 state로 정의
    const handleInputChange = (e) => {
        setReply(e.target.value);           // 입력한 댓글로 state 값 변경
    }

    // 입력 버튼 클릭
    const handleSubmitClick = (e) => {
        e.preventDefault();

        // 입력한 경우 댓글 추가 -> 댓글 컴포넌트 새로고침
        if (reply !== '') {
            alert(reply + '\n추가해라');
            /*
                fix : 댓글 추가 후 새로고침
            */
        }
    }

    return (
        <div className="reply-write-wrap">
            <form className="reply-write">
                <input className="reply-write-input" style={inputWidth} type="text" placeholder="댓글을 입력하세요." onChange={handleInputChange} />
                <div className="reply-write-btn"><SendOutlined rotate={-45} onClick={handleSubmitClick} /></div>
            </form>
        </div>
    );
}

export default ReplyWrite;