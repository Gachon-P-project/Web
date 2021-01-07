/**
 * 댓글, 답글
 */

import React from 'react';
import ReplyItem from './ReplyItem';

function Reply(props) {

    /*
        fix : 댓글, 답글 조회 !! 마지막에 mark: 'none' 꼭 넣기 !!
    */
    const replyItems = [
        {no: 1, writer: '익명1', contents: '첫 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0, mark: 'none'},
        {no: 2, writer: '닉네임', contents: '첫 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0, mark: 'none'},
        {no: 3, writer: '익명1', contents: '첫 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0, mark: 'none'},
        {no: 4, writer: '익명3', contents: '두 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0, mark: 'none'},
        {no: 5, writer: '익명4', contents: '세 번째 댓글', time: '10분 전', depth: 0, is_deleted: 0, mark: 'none'},
        {no: 6, writer: '닉네임', contents: '세 번째 댓글의 답글', time: '10분 전', depth: 1, is_deleted: 0, mark: 'none'},
    ];

    // 댓글 작성자가 게시물 글쓴이인 경우 mark 변경
    const modifiedItems = replyItems.map((replyItem) =>
        replyItem.writer === props.writer ? { ...replyItem, mark: 'block' } : replyItem
    )

    // 댓글 구분선
    const replyStyle = { borderTop: '1px solid #e3e3e3' };

    // 답글일 경우 margin
    const reReplyStyle = { marginLeft: '25px' };

    return (
        <div className="reply-wrap">
            {modifiedItems.map((replyItem) =>
                replyItem.depth === 0
                ?
                <ReplyItem
                    writer={replyItem.writer}
                    contents={replyItem.contents}
                    time={replyItem.time}
                    style={replyStyle}
                    mark={replyItem.mark}
                    key={replyItem.no}
                />
                :
                <ReplyItem
                    writer={replyItem.writer}
                    contents={replyItem.contents}
                    time={replyItem.time}
                    style={reReplyStyle}
                    mark={replyItem.mark}
                    key={replyItem.no}
                />
            )}

        </div>
    );
}

export default Reply;