import React from 'react';
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import Breadcrumb from './Breadcrumb';
import BoardPost from './BoardPost';
import Footer from './Footer';
import '../css/Main.css';
import '../css/Content.css';
import '../css/Breadcrumb.css';

function BoardHOT() {
    const postItems = [
        {link: '', title: 'hot 게시물 제목1', contents: '게시물 내용1', time: '시간', writer: '작성자', like: 0, reply: 0},
        {link: '', title: 'hot 게시물 제목2', contents: '게시물 내용2', time: '시간', writer: '작성자', like: 1, reply: 2},
        {link: '', title: 'hot 게시물 제목3', contents: '게시물 내용3', time: '시간', writer: '작성자', like: 2, reply: 4}
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
                <Breadcrumb link="/main, /main/board/hot" name="게시판, HOT 게시판" />

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

export default withRouter(BoardHOT);