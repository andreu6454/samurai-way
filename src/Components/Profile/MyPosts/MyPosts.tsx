import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const PostsData = [
        {id: 1, message: "Hello", likesCount: 10},
        {id: 2, message: "How are you?", likesCount: 5},
        {id: 3, message: "good", likesCount: 14}
    ]

    const PostsElement = PostsData.map(dialog => <Post message={dialog.message} likes={dialog.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            My posts:
            {PostsElement}
        </div>
    );
};

export default MyPosts;