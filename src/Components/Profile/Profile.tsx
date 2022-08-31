import React, {useReducer} from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";
import {ProfilePageDataType} from "../../Redux/Types";
import {addPostsAC, postsReducer} from "../../Reducers/postsReducer";

type ProfilePropsType = {
    state: ProfilePageDataType
}

const Profile = (props: ProfilePropsType) => {

    const [posts, dispatchPosts] = useReducer(postsReducer, props.state.PostsData)
    const addPost = (post: string) => {
        dispatchPosts(addPostsAC(post))
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

export default Profile;