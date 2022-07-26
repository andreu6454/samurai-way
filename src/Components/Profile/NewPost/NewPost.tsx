import React from 'react';
import style from "./NewPosts.module.css"

const NewPost = () => {
    return (
        <div className={style.NewPost}>
            <div>
                <textarea defaultValue={"New Post"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    );
};

export default NewPost;