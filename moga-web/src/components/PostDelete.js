import React from 'react'
import { withRouter } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import { message } from 'antd';

function PostDelete(props) {
    // const { params } = props.match;

    const size = useWindowSize();
    const height = size[1];

    return (
        <>
        {/* {params.board}
        {params.postNo} */}
        
        {/* {message.success({
            content: '삭제되었습니다.',
            duration: 1,
            style: {
                marginTop: height*0.1
            }
        })} */}
        </>

    );
}

export default withRouter(PostDelete);