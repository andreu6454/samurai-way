import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/Types";
import {v1} from "uuid";

type MyPostsPropsType = {
    PostsData: Array<PostsDataType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const PostsElement = props.PostsData.map(dialog =>
        <Post
            key = {v1()}
            message={dialog.message}
            likes={dialog.likesCount}
        />)

    return (
        <div className={style.postsBlock}>
            My posts:
            {PostsElement}
            {PostsElement}
            {PostsElement}
        </div>
    );
};

export default MyPosts;