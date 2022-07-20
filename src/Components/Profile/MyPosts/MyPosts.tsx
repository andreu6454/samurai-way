import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts:
            <Post message={"Hello"}/>
            <Post message={"How are you?"}/>
            <Post message={"good"}/>
        </div>
    );
};

export default MyPosts;