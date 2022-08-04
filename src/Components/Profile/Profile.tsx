import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType} from "../../index";

type ProfilePropsType = {
    PostsData: Array<PostsDataType>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.appContent}>

            <ProfileInfo />
            <NewPost />
            <MyPosts PostsData={props.PostsData}/>

        </div>
    );
};

export default Profile;