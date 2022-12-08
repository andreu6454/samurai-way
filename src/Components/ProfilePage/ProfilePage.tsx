import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {PostsDataType} from "../../Redux/Types";
import {addPostsAC} from "../../Redux/Reducers/profilePageReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";


const ProfilePage = () => {
    const posts = useSelector<AppRootStateType,Array<PostsDataType>>(state => state.ProfilePage.PostsData)
    const dispatch = useDispatch()
    const addPost = (post: string) => {
        dispatch(addPostsAC(post))
    }

    return (
        <div>
            <div className={style.appImg}>
                <img
                    src={"https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"}
                    alt={"content-header"}/>
            </div>
            <div className={style.appContent}>

                <ProfileInfo/>
                <NewPost addPost={addPost}/>
                <MyPosts PostsData={posts}/>

            </div>
        </div>
    );
};

export default ProfilePage;