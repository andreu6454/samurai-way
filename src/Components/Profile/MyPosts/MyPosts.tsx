import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const PostsData = [
        {id: 1, message: "Hello", likesCount: 10},
        {id: 2, message: "How are you?", likesCount: 5},
        {id: 3, message: "good", likesCount: 14}
    ]
    return (
        <div className={style.postsBlock}>
            My posts:
            <Post message={PostsData[0].message} likes={PostsData[0].likesCount}/>
            <Post message={PostsData[1].message} likes={PostsData[1].likesCount}/>
            <Post message={PostsData[2].message} likes={PostsData[2].likesCount}/>
        </div>
    );
};

export default MyPosts;