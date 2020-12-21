import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Modal, Input, Button } from 'antd';

function Nickname({ state, close }) {
    
    const [nickname, setNickname] = useState('');   // 닉네임 값을 state로 정의
    const [dupState, setDupState] = useState('none');   // 중복 메시지 display를 state로 정의

    // 입력한 닉네임으로 state 값 변경
    const nickInput = (e) => {
        setNickname(e.target.value);
      }

    // 중복 검사
    const duplicateChk = () => {
        console.log('입력한 닉네임 : ' + nickname);

        if (nickname != '') {
            setDupState('block');   // 중복 메시지 활성화
        }
    }

    return (
        state ?
        <Modal
            title="닉네임을 설정하세요."
            centered
            visible={state}
            onOk={duplicateChk}
            onCancel={close}
            width={350}
            footer={[
                <Button key="submit" type="primary" onClick={duplicateChk}>
                    OK
                </Button>,
            ]}
            >
                <Input value={nickname} onChange={nickInput} autoFocus required placeholder="닉네임 입력" size="large" />
                <br/><br/>
                <p style={{ color: 'red', display: dupState}}>이미 사용중인 닉네임입니다.</p>
                <p>※ 닉네임은 변경이 가능합니다.</p>
                
        </Modal>
        : null
    );
}

export default withRouter(Nickname);