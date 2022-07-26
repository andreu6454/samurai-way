import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = () => {
    return (
        <div className={style.appContent}>

            <ProfileInfo />
            <NewPost />
            <MyPosts />

        </div>
    );
};

export default Profile;