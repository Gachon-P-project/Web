/**
 * 게시물 메뉴
 */

import React, { useState } from 'react';
import { Modal } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import '../css/PostMenu.css';

function PostMenu(props) {

    // modal action
    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(true);
    };

    const closeModal = () => {
        setModalState(false);
    };

    return (
        <>
        {/* 메뉴 버튼 */}
        <div className="post-menu-btn" onClick={openModal}>
            <MoreOutlined />
        </div>

        
        {/* 현재 사용자와 게시물 작성자가 같은 사용자인지 판단하여 메뉴 구성 */}
        {props.userNo === '2000'
        /*
            fix : 현재 사용자와 게시물 작성자의 user_no 비교

            props.userNo : Post.js에서 넘겨받은 작성자 user_no
            2000(임의 지정) : 현재 로그인되어 있는 사용자의 user_no
        */
        ?
            <PostMenuItem
                sameUser = "true"
                state = {modalState}
                close = {closeModal}
            />
        :
            <PostMenuItem
                sameUser = "false"
                state = {modalState}
                close = {closeModal}

            />
        }
        </>
    );
}

/**
 * 게시물 메뉴 구성
 */
function PostMenuItem(props) {
    return (
        props.state &&
        <Modal
            centered
            visible={props.state}
            closable={false}
            onCancel={props.close}
            cancelButtonProps={{ style: { display: 'none' } }}
            footer={null}
        >
            {props.sameUser === 'true'
            ?
                <div>메뉴 - 게시물 수정, 삭제</div>
            :
                <div>메뉴 - 신고하기</div>
            }
        </Modal>
    );
}

export default PostMenu;