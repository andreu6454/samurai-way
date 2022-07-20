import React from 'react';
import style from "./Post.module.css"

const Post = () => {
    return (
        <div className={style.item}>
            <img src = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"/>
            New Post
            <div>
                Like
            </div>
        </div>
    );
};

export default Post;