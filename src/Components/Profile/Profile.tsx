import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={style.appContent}>
            <ProfileInfo />
            <div>
                <textarea defaultValue={"New Post"}/>
            </div>
            <div>
                <button>Send</button>
            </div>

            <MyPosts />
        </div>
    );
};

export default Profile;