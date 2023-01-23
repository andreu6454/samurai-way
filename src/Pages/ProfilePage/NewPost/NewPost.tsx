import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./NewPosts.module.css"
import Button from "../../../Components/Buttons/Button";

type NewPostPropsType = {
    addPost: (postData: string) => void
}

const NewPost = (props:NewPostPropsType) => {
    const [postData,setPostData] = useState("")

    const onClickAddPost = () => {
        postData.trim() !== "" && props.addPost(postData)
        setPostData("")
    }
    const onKeyDownAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === "Enter" && onClickAddPost()
    }

    const onChangeSetPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostData(e.currentTarget.value)
    }

    return (
        <div className={style.NewPost}>
            <div>
                <textarea placeholder={"Whats new?"} onChange={onChangeSetPost} onKeyPress={onKeyDownAddPost} value={postData} className={style.Input}/>
            </div>
            <div>
                <Button buttonFunction={() => onClickAddPost()} buttonName={"Post"} />
            </div>
        </div>
    );
};

export default NewPost;