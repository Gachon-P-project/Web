/**
 * 초기 닉네임 설정 modal
 */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import '../css/Nickname.css';

function Nickname({ history, state }) {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();                     // 중복 확인 버튼 비활성화
    const [checkState, setCheckState] = useState('none');   // 중복 체크 메시지 비활성화
    const [impoState, setImpoState] = useState('none');     // 사용 불가능 메시지 비활성화
    const [possState, setPossState] = useState('none');     // 사용 가능 메시지 비활성화
    const [nickname, setNickname] = useState('');           // 닉네임 값을 state로 정의

    useEffect(() => {
        forceUpdate({});
    }, []);

    const handleInputChange = (e) => {
        setNickname(e.target.value);    // 입력한 닉네임으로 state 값 변경

        // 입력 중엔 모든 메시지 비활성화
        setImpoState('none');
        setPossState('none');
        setCheckState('none');
    }

    // 중복 체크
    const onFinish = (values) => {
        console.log('중복 체크할 닉네임:', values);
        setCheckState('none');

        /*
            fix : 중복 체크. a일 때 중복이게 해놓음
        */

        if (values.nickname === 'a') {  // 중복일 경우
            setImpoState('block');      // 사용 불가능 메시지 활성화
        } else {                        // 중복 아닐 경우
            setPossState('block');      // 사용 가능 메시지 활성화
        }
    };

    // 닉네임 추가 -> 메인화면으로 이동
    const handleOkClick = (e) => {    
        e.preventDefault();

        if (checkState === 'none' && impoState === 'none' && possState === 'none') { // 중복 체크 했는지 확인
            setCheckState('block');
        } else if (possState === 'block') { // 사용 가능한 경우
            /*
                fix : 닉네임 추가
            */
            console.log('nickname: ', nickname);
            history.push('/main');
        }
    }

    return (
        state ?
        <Modal
            title="닉네임을 설정하세요."
            centered
            visible={state}
            closable={false} // x 버튼 비활성화. 모달 한 번 열리면 못 닫게 함
            width={350}
            footer={[
                <Button key="submit" type="primary" onClick={handleOkClick}>
                    OK
                </Button>
            ]}
            >
                <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="nickname"
                        rules={[
                        {
                            required: true,
                            message: '닉네임을 입력해주세요!',
                        },
                        ]}
                    >
                        <Input autoFocus placeholder="닉네임" value={nickname} onChange={handleInputChange} className="nick-input"/>
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                        {() => (
                        <Button
                            htmlType="submit"
                            className="dup-btn"
                            disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            중복확인
                        </Button>
                        )}
                    </Form.Item>
                    <br/><br/>
                    <Form.Item>
                    <p style={{ color: 'red', display: checkState}}>중복 확인을 해주세요.</p>
                        <p style={{ color: 'red', display: impoState}}>이미 사용중인 닉네임입니다.</p>
                        <p style={{ color: '#1890ff', display: possState}}>사용 가능한 닉네임입니다.</p>
                        <p>※ 닉네임은 변경이 가능합니다.</p>
                    </Form.Item>
                </Form>
                
        </Modal>
        : null
    );
}

export default withRouter(Nickname);