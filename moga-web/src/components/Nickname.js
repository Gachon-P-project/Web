import React from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

function Nickname({ state, close }) {
    console.log('Modal state : ' + state);

    return (
        state ?
        <Modal
            title="닉네임을 설정하세요."
            centered
            visible={state}
            onOk={close}
            onCancel={close}
            >
            <p>닉네임을 설정하세요.</p>
        </Modal>
        : null
    );
}

export default Nickname;