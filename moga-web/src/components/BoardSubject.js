import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import BoardPost from './BoardPost';
import Footer from './Footer';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import '../css/Main.css';
import '../css/Content.css';

function BoardSubject(props) {
    const { params } = props.match;
    // parameter : params.subject, params.professor, params.userNo

    const postItems = [
        {link: '', title: '제목1', contents: '내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {link: '', title: '제목2', contents: '내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {link: '', title: '제목3', contents: '내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];

    return (
        <div className="main">

            <HeaderWeb />
            <HeaderMobile />

            <div className="content">
                {/* breadcrumb */}
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/main"><HomeOutlined /></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/main">게시판</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="#">수업 게시판</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="bold">{params.subject}</Breadcrumb.Item>
                </Breadcrumb>

                {postItems.map((postItem, i) =>
                    <BoardPost
                        link={postItem.link}
                        title={postItem.title}
                        contents={postItem.contents}
                        time={postItem.time}
                        writer={postItem.writer}
                        like={postItem.like}
                        reply={postItem.reply}
                        key={i}
                    />
                )}
            </div>

            <Footer />

        </div>
    );
}

export default withRouter(BoardSubject);