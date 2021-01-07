/**
 * 댓글, 답글
 */

import React from 'react';
import ReplyItem from './ReplyItem';

function Reply() {
    /*
        fix : 댓글, 답글 조회
    */
    const replyItems = [
        {no: 1, writer: '익명1', contents: '첫 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0},
        {no: 2, writer: '익명2', contents: '첫 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0},
        {no: 3, writer: '익명1', contents: '첫 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0},
        {no: 4, writer: '익명2', contents: '두 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0},
        {no: 5, writer: '익명3', contents: '세 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0},
        {no: 6, writer: '익명4', contents: '세 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0},
    ];

    // 댓글 구분선
    const replyStyle = {
        borderTop: '1px solid #e3e3e3'
    };

    // 답글일 시 margin
    const reReplyStyle = {
        marginLeft: '25px'
    };

    return (
        <div className="reply-wrap">
            {replyItems.map((replyItem) =>
                replyItem.depth === 0
                ?
                <ReplyItem
                    writer={replyItem.writer}
                    contents={replyItem.contents}
                    time={replyItem.time}
                    style={replyStyle}
                    key={replyItem.no}
                />
                :
                <ReplyItem
                    writer={replyItem.writer}
                    contents={replyItem.contents}
                    time={replyItem.time}
                    style={reReplyStyle}
                    key={replyItem.no}
                />
            )}

        </div>
    );
}

export default Reply;