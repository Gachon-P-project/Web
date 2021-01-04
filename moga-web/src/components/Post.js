import React from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Layout from './Layout';
import Reply from './Reply';
import '../css/Post.css';

function Post() {
    return (
        <Layout header footer>
            <div className="post-wrap">
                <div className="post">
                    <Avatar className="post-avatar" size="large" icon={<UserOutlined />} />
                    <div className="post-info">
                        <div className="bold">익명</div>
                        <div className="post-time">5분 전</div>
                    </div>
                    <div className="post-title bold">새벽을 틈타</div>
                    <div className="post-contents">노래 추천좀 배경으로 깔리는 음이 좋은 노래가 좋아 발라드로</div>
                    <div className="post-status">
                        <div className="post-like"><LikeOutlined /> 2</div>
                        <div className="post-reply"><MessageOutlined /> 12</div>
                        <div className="post-scrap"><StarOutlined /> 1</div>
                    </div>
                </div>
            </div>

            <Reply />

        </Layout>
    );
}

export default withRouter(Post);