import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import BoardPost from './BoardPost';
import Footer from './Footer';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import '../css/Main.css';
import '../css/Content.css';
import '../css/Breadcrumb.css';

function BoardMajor() {
    const postItems = [
        {link: '', title: '학과 게시물 제목1', contents: '학과 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {link: '', title: '학과 게시물 제목2', contents: '학과 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {link: '', title: '학과 게시물 제목3', contents: '학과 내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
    ];

    const width = useWindowSize();

    let header;
    if (width > 736) {
        header = <HeaderWeb />;
    } else {
        header = <HeaderMobile />;
    }

    return (
        <div className="main">

            {header}

            <div className="content">
                {/* breadcrumb */}
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/main"><HomeOutlined /></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/main">게시판</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="bold">학과 게시판</Breadcrumb.Item>
                </Breadcrumb>

                {/* post */}
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

export default withRouter(BoardMajor);