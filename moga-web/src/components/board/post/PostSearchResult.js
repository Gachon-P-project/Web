/**
 * 게시물 검색 결과
 */

import React from 'react';
import NotFound from '../../NotFound';
import PostList from './PostList';

function PostSearchResult(props) {

    console.log('게시판 :', props.board, ', 검색어 :', props.word);

    /*
        fix : 특정 게시물 조회
    */

    const searchItems = [
        { no: 1, link: '/main/board/post/' + props.board + '/', title: '게시물 제목1', contents: '내용1', time: '시간', writer: '작성자', like: 1, reply: 2 },
        { no: 2, link: '/main/board/post/' + props.board + '/', title: '게시물 제목2', contents: '내용2', time: '시간', writer: '작성자', like: 1, reply: 2 },
        { no: 3, link: '/main/board/post/' + props.board + '/', title: '게시물 제목3', contents: '내용3', time: '시간', writer: '작성자', like: 2, reply: 4 },
    ];

    return (
        <>
            {searchItems.length === 0
                ?
                <NotFound />
                :
                searchItems.map((result) =>
                    <PostList
                        empty="n"
                        link={result.link + result.no}
                        title={result.title}
                        contents={result.contents}
                        time={result.time}
                        writer={result.writer}
                        like={result.like}
                        reply={result.reply}
                        key={result.no}
                    />
                )
            }
        </>
    );
}

export default PostSearchResult;