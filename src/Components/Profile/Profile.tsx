import React, {useState} from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType, ProfilePageDataType} from "../../Redux/State";
import {v1} from "uuid";

type ProfilePropsType = {
    state: ProfilePageDataType
}

const Profile = (props: ProfilePropsType) => {

    const [posts, setPosts] = useState(props.state.PostsData)
    const addPost = (post: string) => {
        const newTask: PostsDataType = {
            id: v1(),
            message: post,
            likesCount: 999
        }
        setPosts([newTask, ...posts])
    }

    return (
        <div>
            <div className={style.appImg}>
                <img src={"https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"} alt={"content-header"}/>
            </div>
            <div className={style.appContent}>

                <ProfileInfo/>
                <NewPost addPost={addPost}/>
                <MyPosts PostsData={posts}/>

            </div>
        </div>
    );
};

export default Profile;