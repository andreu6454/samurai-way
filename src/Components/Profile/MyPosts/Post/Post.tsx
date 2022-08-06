import React from 'react';
import style from "./Post.module.css"

type PostPropsType = {
    message: string;
    likes: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={style.item}>
            <div className={style.Message}>
                <div className={style.MessageAva}>
                    <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt={"ava"}/>
                </div>
                <div className={style.MessageText}>
                    <div className={style.MessageName}> Vlad Rudenko:</div>
                    <div className={style.MessageDate}>
                        06.09.2022
                    </div>
                </div>
            </div>
            <div className={style.MessageText}>
                {props.message}
            </div>
            <div className={style.LikesCounter}>
                <div className={style.heart}></div>
                <div className={style.LikesCount}>{props.likes}</div>

            </div>
        </div>
    );
};

export default Post;