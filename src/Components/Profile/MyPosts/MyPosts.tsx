import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsDataType} from "../../../index";

type MyPostsPropsType = {
    PostsData: Array<PostsDataType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const PostsElement = props.PostsData.map(dialog => <Post message={dialog.message} likes={dialog.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            My posts:
            {PostsElement}
        </div>
    );
};

export default MyPosts;