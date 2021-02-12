import React from 'react';
import { Modal } from 'antd';

function ReplyMenu({ state, close }) {
    // console.log('Modal state : ' + state);

    return (
        state ?
        <Modal
            title="댓글 메뉴"
            centered
            visible={state}
            onOk={close}
            onCancel={close}
            >
            <p>메뉴</p>
        </Modal>
        : null
    );
}

export default ReplyMenu;