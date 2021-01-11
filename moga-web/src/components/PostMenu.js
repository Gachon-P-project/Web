/**
 * 게시물 메뉴
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router';
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
                board = {props.board}
                postNo = {props.postNo}
                sameUser = "true"
                state = {modalState}
                close = {closeModal}
            />
        :
            <PostMenuItem
                board = {props.board}
                postNo = {props.postNo}
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

    const history = useHistory();

    const handleModify = () => {
        history.push('/main/board/postmodify/'+props.board+'/'+props.postNo);
    }
    
    const handleDelete = () => {
        alert('삭제');
    }

    const handleReport = () => {
        alert('신고하기');
    }

    return (
        props.state &&
        <Modal
            className="post-menu-modal"
            width={200}
            centered
            visible={props.state}
            closable={false}
            onCancel={props.close}
            cancelButtonProps={{ style: { display: 'none' } }}
            footer={null}
        >
            {props.sameUser === 'true'
            ?
                // 메뉴 - 게시물 수정, 삭제
                <div className="post-menu">
                    <div className="post-menu-item post-menu-title">글 메뉴</div>
                    <div className="post-menu-item" onClick={handleModify}>수정</div>
                    <div className="post-menu-item" onClick={handleDelete}>삭제</div>
                </div>
            :
                // 메뉴 - 신고하기
                <div className="post-menu">
                    <div className="post-menu-item post-menu-title">글 메뉴</div>
                    <div className="post-menu-item" onClick={handleReport}>신고하기</div>
                </div>
            }
        </Modal>
    );
}

export default PostMenu;