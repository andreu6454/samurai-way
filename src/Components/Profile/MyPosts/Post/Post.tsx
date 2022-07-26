import React from 'react';
import style from "./Post.module.css"

type PostPropsType = {
    message: string;
}
const Post = (props:PostPropsType) => {
    return (
        <div className={style.item}>
            <img src = "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"/>
            {props.message}
            <div>
                Like 0
            </div>
        </div>
    );
};

export default Post;