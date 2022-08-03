import React from 'react';
import style from "./Post.module.css"

type PostPropsType = {
    message: string;
    likes: number
}
const Post = (props:PostPropsType) => {
    return (
        <div className={style.item}>
            <img src = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"/>
            {props.message}
            <div>
                likes {props.likes}
            </div>
        </div>
    );
};

export default Post;