import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {ProfilePageDataType} from "../../Redux/State";

type ProfilePropsType = {
    state: ProfilePageDataType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.appContent}>

            <ProfileInfo />
            <NewPost />
            <MyPosts PostsData={props.state.PostsData}/>

        </div>
    );
};

export default Profile;